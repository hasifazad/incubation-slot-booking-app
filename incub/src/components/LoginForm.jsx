import { Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { AdminDetailsContext } from '../contexts/AdminContext';


function LoginForm() {

    const paperStyle = { padding: '30px 20px', width: '350px', margin: '50px auto' }
    const headerStyle = { margin: '0' }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const textStyle = { margin: '10px 0', backgroundColor: 'white' }
    const formStyle = { marginTop: '10px' }
    const buttonStyle = { margin: '20px 0' }
    const span = { color: 'red' }


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let { admin, setAdmin } = useContext(AdminDetailsContext)
    const navigate = useNavigate()

    const onHandleSubmit = () => {
        let obj = {
            email, password
        }
        Axios.post('http://localhost:4000/admin/login', obj).then((response) => {
            console.log(response.data)

            if (response.data.login) {
                setAdmin(response.data.admin)
                localStorage.setItem('jwttoken', response.data.jwttoken)
                navigate('/')
            } else {
                console.log(response.data);
            }

        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><VpnKeyIcon /></Avatar>
                    <h2 style={headerStyle}>Login</h2>
                    <Typography>
                        Enter you Email and Password
                    </Typography>
                </Grid>
                <Box style={formStyle}>

                    {admin && <span style={span}>User doesn't exist</span>}
                    <TextField style={textStyle} type='email' fullWidth label='Email' size='small' variant='filled' required
                        value={email} onChange={(event) => { setEmail(event.target.value) }} />

                    <TextField style={textStyle} type='password' fullWidth label='Password' size='small' variant='filled' required
                        value={password} onChange={(event) => { setPassword(event.target.value) }} />

                    <Button style={buttonStyle} fullWidth variant='contained' color='primary' onClick={() => { onHandleSubmit() }}>Submit</Button>
                    <Link to='/signup'>Click here to signup</Link>

                </Box>
            </Paper>
        </Grid>
    )
}

export default LoginForm