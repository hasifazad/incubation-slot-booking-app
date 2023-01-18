import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './DashBoard.css'
import DialogBox from '../DialogeBox'



import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ApprovalModal from '../ApprovalModal'

import Typography from '@mui/material/Typography';

function DashBoard() {
    const navigate = useNavigate()
    const [applications, setApplications] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:4000/admin/application-list').then((response) => {
            setApplications(response.data)
        }).catch((err) => {
            console.log(err);

        })

    }, [applications])





    return (
        <div className='app'>
            <div className='dashboard-body'>
                <Typography variant="h6" gutterBottom>NEW APPLICANT LIST</Typography>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Sl.No</TableCell>
                                <TableCell align="center">ID</TableCell>
                                <TableCell align="center">Email</TableCell>
                                <TableCell align="center">Company</TableCell>
                                <TableCell align="center">Mobile</TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {applications.map((row, index) => {
                                if (!row.approval_status) {
                                    return (
                                        <TableRow key={index + 1} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                                            <TableCell component="th" scope="row">
                                                {index + 1}
                                            </TableCell>
                                            <TableCell align="center">{row.id}</TableCell>
                                            <TableCell align="center">{row.email}</TableCell>
                                            <TableCell align="center">{row.company}</TableCell>
                                            <TableCell align="center">{row.mobile}</TableCell>
                                            <TableCell align="center"><DialogBox data={row} /></TableCell>
                                            <TableCell align="center"><ApprovalModal variant="contained" id={row.id}>Accept</ApprovalModal></TableCell>
                                        </TableRow>
                                    )
                                }
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

export default DashBoard