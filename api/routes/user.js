const express = require("express")
const router = express.Router()

router.post('/form-submit', (req, res) => {
    let arr = []

    for (i in req.body) {
        arr.push(req.body[i]);
    }
    const q = 'INSERT INTO applications(name,city,email,company,address,state,mobile,descrip_1,mode) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)'
    client.query(q, arr).then((response) => {
    }).catch((err) => {
        console.log(err)
    })

    console.log(arr);
    res.json()
})


module.exports = router