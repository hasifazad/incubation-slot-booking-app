const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")
const { client } = require('../pgconfig')





router.get('/verify', (req, res, next) => {
    let token = req.headers.authorization
    console.log(token);
    if (token) {
        jwt.verify(token, 'secret', (err, auth) => {
            if (err) {
                console.log(err);
            } else (
                client.query('SELECT * FROM users WHERE password=$1', [auth.password]).then((response) => {
                    if (auth.email == response.rows[0].email) {
                        res.json({ login: true, jwttoken: token, admin: response.rows[0], message: 'user login succesful' })
                    } else {
                        res.status(401).json({ login: false })
                    }
                }).catch((err) => {
                    console.log(err)
                })
            )
        })
    } else {
        res.status(401).json({ login: false })
    }

})

router.post('/signup', (req, res) => {
    const { username, email, mobile, password } = req.body

    client.query('INSERT INTO users(username,email,mobile,password) VALUES($1,$2,$3,$4)', [username, email, mobile, password]).then((response) => {
        jwt.sign(req.body, 'secret', (err, token) => {
            if (err) {
                console.log(err);
            } else {
                res.json({ signup: true, message: 'admin signup succesful' })
            }
        })

    }).catch((err) => {
        console.log(err);
        res.status(401).json(err)
    })
})


router.post('/login', (req, res) => {
    const { email, password } = req.body

    client.query('SELECT * FROM users WHERE email=$1 AND password=$2', [email, password])
        .then((response) => {
            if (response.rows.length == 0) {
                res.status(401).json({ admin: false, message: 'user not exist' })
            } else {
                jwt.sign(response.rows[0], 'secret', (err, token) => {
                    if (err) {
                        console.log(err);
                    } else {
                        res.json({ login: true, jwttoken: token, admin: response.rows[0], message: 'user login succesful' })
                    }
                })
            }

        }).catch((err) => {
            console.log(err);
            res.status(401).json(err)
        })
})

router.get('/application-list', (req, res) => {
    client.query('SELECT * FROM applications').then((response) => {
        res.status(200).json(response.rows)
    }).catch((err) => {
        console.log(err);
        res.status(401).json('data not found')
    })
})


router.get('/company', (req, res) => {
    client.query('SELECT company,approval_status FROM applications')
        .then((response) => {
            if (response.rows.length == 0) {
                res.json()
            } else {
                res.json(response.rows)
            }

        }).catch((err) => {
            console.log(err);
            res.status(401).json('data not found')
        })
})

router.post('/slot-booked', (req, res) => {
    let slotId = req.body.id
    let selection = req.body.selection
    let status = true
    client.query('UPDATE applications SET slot_id=$1,book_status=$2 WHERE company=$3', [slotId, status, selection]).then((response) => {
        let slots = response.rows
        res.json({ slots })
    })
})

router.put(`/approve/:id/`, (req, res) => {
    let id = parseInt(req.params.id)
    let status = true
    client.query('UPDATE applications SET approval_status=$1 WHERE id=$2', [status, id]).then((response) => {
        res.status(200).json('Approved Successfully')
    }).catch((err) => {
        console.log(err);
    })
})






module.exports = router