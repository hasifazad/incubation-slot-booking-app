import React, { useEffect, useState } from 'react'
import Axios from 'axios'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import DialogBox from '../DialogeBox'

function RecordList() {
    const [state, setState] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:4000/admin/application-list/approved').then((response) => {
            setState(response.data)
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    return (
        <div className='dashboard-body'>
            <Typography variant='h6' gutterBottom>APPLICATION STATUS</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650, width: 1000 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Sl.No</TableCell>
                            <TableCell align="center">ID</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Company</TableCell>
                            <TableCell align="center">Details</TableCell>
                            <TableCell align="center">Status</TableCell>
                            <TableCell align="center">Slot</TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {state.map((row, index) => {

                            return (
                                <TableRow key={index + 1} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                                    <TableCell component="th" scope="row">
                                        {index + 1}
                                    </TableCell>
                                    <TableCell align="center">{row.id}</TableCell>
                                    <TableCell align="center">{row.email}</TableCell>
                                    <TableCell align="center">{row.company}</TableCell>
                                    <TableCell align="center">{row.mobile}</TableCell>
                                    <TableCell align="center">{row.book_status ? 'booked' : 'approved'}</TableCell>
                                    <TableCell align="center">{row.slot_id ? row.slot_id : 'nil'}</TableCell>
                                    <TableCell align="center"><DialogBox data={row} /></TableCell>

                                </TableRow>
                            )

                        })}
                    </TableBody>

                </Table>
            </TableContainer>
        </div>

    )
}

export default RecordList