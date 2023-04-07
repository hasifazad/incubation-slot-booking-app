import React, { useEffect, useState } from 'react'
import './SlotBooking.css'


import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import OutlinedInput from '@mui/material/OutlinedInput';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Axios from 'axios';
import axios from 'axios';
import { MenuItem, Paper, TableContainer, Typography } from '@mui/material';


function SlotBooking() {
    const [id, setId] = useState(null)
    const [open, setOpen] = useState(false);
    const [company, setCompany] = useState([])
    const [selection, setSelection] = useState('')
    const [slots, setSlots] = useState([])
    let [refresh, setRefresh] = useState(false)

    const handleChange = (event) => {
        setSelection(event.target.value)
    };

    const handleClickOpen = (id) => {
        setId(id)

        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason !== 'backdropClick') {
            setOpen(false);
        }
    };
    const handleOk = (event, reason) => {
        if (reason !== 'backdropClick') {
            setOpen(false);

            Axios.post('http://localhost:4000/admin/slot-booked', { id, selection }).then((res) => {
                setRefresh(!refresh)
            }).catch((err) => {
                console.log(err);

            })
        }
    };

    useEffect(() => {
        axios.get('http://localhost:4000/admin/application-list').then((response) => {
            let a = response.data.map((obj) => parseInt(obj.slot_id))
            setCompany(response.data)
            setSlots([...a])
        }).catch(() => {

        })
    }, [refresh])


    return (
        <div className='dashboard-body'>
            <Typography variant='h6'>BOOKING SLOT</Typography>
            <TableContainer component={Paper} sx={{ width: 1000 }}>

                <div className='slots'>
                    {
                        Array(100).fill().map((id, index) => {
                            return <div key={index + 1} className={slots.includes(index + 1) ? 'box-booked' : 'box'}
                                onClick={slots.includes(index + 1) ? null : () => { handleClickOpen(index + 1) }}>{index + 1}</div>
                        })
                    }
                </div>


                <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                    <DialogContent sx={{ paddingBottom: 0 }}>
                        <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                            <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
                                <Select
                                    value={selection}
                                    onChange={handleChange}
                                    size='small'
                                >
                                    {company &&
                                        company.map((data, index) => {
                                            if (data.approval_status && !data.book_status) {
                                                return <MenuItem key={index} value={data.company}>{data.company}</MenuItem>
                                            }
                                        })
                                    }

                                </Select>
                            </FormControl>
                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                            </FormControl>
                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleOk}>Ok</Button>
                    </DialogActions>
                </Dialog>
            </TableContainer>
        </div>

    )
}

export default SlotBooking