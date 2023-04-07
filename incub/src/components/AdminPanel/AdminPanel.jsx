import React from 'react'
import { useNavigate } from 'react-router-dom'
import './AdminPanel.css'

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

import BeenhereIcon from '@mui/icons-material/Beenhere';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';


function AdminPanel() {

    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const navigate = useNavigate()

    const handleListItemClick = (event, index, endpoint) => {
        setSelectedIndex(index);
        navigate(`/${endpoint}`)
    };


    return (
        <Box sx={{ width: '100%', maxWidth: 300, minWidth: 300, borderRadius: 3, margin: 3 }}>
            <List component="nav" aria-label="main mailbox folders">
                <ListItemButton
                    sx={{ borderRadius: 3, bgcolor: 'background.paper', marginBottom: 1 }}
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0, '')}
                >
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="DASHBOARD" />
                </ListItemButton>

                <ListItemButton
                    sx={{ borderRadius: 3, bgcolor: 'background.paper', marginBottom: 1 }}
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1, 'recordlist')}
                >
                    <ListItemIcon>
                        <ReceiptLongIcon />
                    </ListItemIcon>
                    <ListItemText primary="RECORD TRACKING" />
                </ListItemButton>

                <ListItemButton
                    sx={{ borderRadius: 3, bgcolor: 'background.paper', marginBottom: 1 }}
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2, 'bookingslot')}
                >
                    <ListItemIcon>
                        <BeenhereIcon />
                    </ListItemIcon>
                    <ListItemText primary="SLOT BOOKING" />
                </ListItemButton>
            </List>
        </Box>
    )
}

export default AdminPanel