import React from 'react'
import './Application.css'
import { useForm } from "react-hook-form";
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';


function Application() {
    const navigate = useNavigate()
    const span = { color: 'red', fontSize: '13px', margin: '0 5px 5px 5px' }
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data, e) => {
        console.log(data)

        Axios.post('http://localhost:4000/form-submit', data).then((res) => {
            e.target.reset()
        }).catch(() => {

        })


    }

    return (
        <>
            <div className='app-header'>
                <div>
                    <Typography>LOGO</Typography>
                </div>
                <div className='header-btn'>
                    <div>
                        <Button>SIGNUP</Button>
                    </div>
                    <div>
                        <Button>LOGIN</Button>
                    </div>
                </div>
            </div>
            <form className='applic-from' onSubmit={handleSubmit(onSubmit)}>
                <div className='a'>
                    <div className='outer'>
                        <div className='outer-first'>
                            <label>Name</label>
                            <input name='name' {...register("name", { required: true })} />
                            {errors.name && <span style={span}>This field is required</span>}

                            <label>City</label>
                            <input name='city' {...register("city", { required: true })} />
                            {errors.city && errors.email.type === "required" && (<span style={span}>This field is required</span>)}

                            <label>Email</label>
                            <input name='email' {...register("email", { required: true, pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/ })} />
                            {errors.email && errors.email.type === "required" && (<span style={span}>This field is required</span>)}
                            {errors.email && errors.email.type === "pattern" && (<span style={span}>Email must be valid</span>)}

                            <label>Company Name</label>
                            <input name='company' {...register("company", { required: true })} />
                            {errors.company && errors.email.type === "required" && (<span style={span}>This field is required</span>)}
                        </div>
                        <div className='outer-first'>
                            <label>Address</label>
                            <input {...register("address", { required: true })} />
                            {errors.address && errors.email.type === "required" && (<span style={span}>This field is required</span>)}

                            <label>State</label>
                            <input {...register("state", { required: true })} />
                            {errors.state && errors.email.type === "required" && (<span style={span}>This field is required</span>)}

                            <label>Mobile</label>
                            <input {...register("mobile", { required: true })} />
                            {errors.mobile && errors.email.type === "required" && (<span style={span}>This field is required</span>)}

                            <label>Company Logo</label>
                            <input type='file' />
                        </div>
                    </div>
                    <div className='outer-second'>
                        <label>Describe your team and background</label>
                        <textarea name='descrip_1' {...register("descrip_1", { required: true })} />
                        {errors.descrip_1 && errors.email.type === "required" && (<span style={span}>This field is required</span>)}
                    </div>
                    <div>
                        <div>
                            <input className='radio' type='radio' name='1' {...register("r", { required: true })} value='physical' />
                            <label>Physical incubation</label>
                        </div>
                        <div>
                            <input className='radio' type='radio' name='1' {...register("r", { required: true })} value='virtual' />
                            <label>Virtual incubation</label>
                        </div>
                        {errors.r && errors.email.type === "required" && (<span style={span}>This field is required</span>)}
                    </div>
                    <button className='sub-button' type=''>Submit</button>
                </div>
            </form>
        </>
    )
}

export default Application