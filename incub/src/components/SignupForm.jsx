import { Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'


function SignupForm() {
    const paperStyle = { padding: '30px 20px', width: '350px', margin: '50px auto' }
    const headerStyle = { margin: '0' }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const textStyle = { margin: '10px 0', backgroundColor: 'white' }
    const formStyle = { marginTop: '10px' }
    const buttonStyle = { margin: '20px 0' }
    const span = { color: 'red' }
    const navigate = useNavigate()

    let { register, handleSubmit, formState: { errors } } = useForm();

    const onsubmit = (data) => {
        console.log(data);
        Axios.post('http://localhost:4000/admin/signup', data).then((response) => {
            console.log(response);
            navigate('/login')
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle} />
                    <h2 style={headerStyle}>SignUp</h2>
                    <Typography variant='caption'>Please fill this form to create an account</Typography>
                </Grid>
                <Box style={formStyle}>
                    <form onSubmit={handleSubmit(onsubmit)}>
                        <TextField style={textStyle} type='text' fullWidth label='Username' size='small' variant='filled' name='username'
                            {...register("username", { required: true, minLength: 3 })} />
                        {errors.username && errors.username.type === "required" && (<span style={span}>This field is required</span>)}
                        {errors.username && errors.username.type === "minLength" && (<span style={span}>Min 6 characters</span>)}

                        <TextField style={textStyle} type='email' fullWidth label='Email' size='small' variant='filled' name='email'
                            {...register("email", { required: true, pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/ })} />
                        {errors.email && errors.email.type === "required" && (<span style={span}>This field is required</span>)}
                        {errors.email && errors.email.type === "pattern" && (<span style={span}>Email must be valid</span>)}

                        <TextField style={textStyle} type='number' fullWidth label='Mobile' size='small' variant='filled' name='mobile'
                            {...register("mobile", { required: true, minLength: 10, maxLength: 10 })} />
                        {errors.mobile && errors.mobile.type === "required" && (<span style={span}>This field is required</span>)}
                        {errors.mobile && errors.mobile.type === "minLength" && (<span style={span}>Mobile must be valid</span>)}



                        <TextField style={textStyle} type='password' fullWidth label='Password' size='small' variant='filled' name='password'
                            {...register("password", { required: true })} />

                        {errors.password && errors.password.type === "required" && (<span style={span}>This field is required</span>)}
                        {/* {errors.password && errors.password.type === "pattern" && (<span style={span}>Enter a strong password</span>)} */}

                        <Button style={buttonStyle} fullWidth variant='contained' color='primary' type='submit'>Submit</Button>
                        <Link to='/login'>Click here to login</Link>
                    </form>
                </Box>
            </Paper>
        </Grid>
    )
}

export default SignupForm