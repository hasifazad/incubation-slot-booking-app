import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { AdminDetailsContext } from '../../contexts/AdminContext'
import './Header.css'

function Header() {
    let { admin } = useContext(AdminDetailsContext)

    return (
        <Box className='header'>
            <div className='header-box1'>
                <Typography variant='h3'>LOGO</Typography>
            </div>
            <div className='header-box2'>
                <Typography variant='h4'>DASHBOARD</Typography>
                <Typography>{admin?.username}</Typography>
            </div>
        </Box>
    )
}

export default Header