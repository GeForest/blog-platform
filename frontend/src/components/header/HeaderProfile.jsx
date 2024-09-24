import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography, Menu, MenuItem } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import CustomAvatar from './CustomAvatar';

import signOut from '../../utils/user-utils/signOut';

export default function HeaderProfile() {
    const {firstName, lastName} = useSelector((state)=>state.user.user)
    const isSignOut = useSelector((state)=>state.alert.message.isSignOut)

    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const dispatch = useDispatch()

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
      }
    const handleClose = () => {
        setAnchorEl(null)
    }

    if (!firstName || !lastName) return null

    const handleExit = () => {
        signOut(dispatch, isSignOut)
    }
    return (
        <Box 
            sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                columnGap: 4
            }}
        >
            <CustomAvatar values={{firstName, lastName, handleClick}} />
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}

                sx={{
                    elevation: 0,
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1,
                    '.MuiMenu-list': {
                        p: '5px 0 0 0',
                        bgcolor: 'background-paper'
                    },
                    '& .MuiPaper-root': {
                        borderRadius: 1.5,
                        boxShadow: 3,
                        '& .MuiMenuItem-root': {
                            p: 1.2,
                        }
                    },
                }}

                slotProps={{
                    paper: {
                      elevation: 0,
                    },
                }}
            >
                <MenuItem onClick={handleExit}
                    sx={{
                        fontSize: 10,
                        columnGap: 1,
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <LogoutIcon color='primary'/>
                    <Typography
                        sx={{
                            fontFamily: '"Lato", sans-serif',
                        }}
                    >
                        Выйти
                    </Typography>
                </MenuItem>
            </Menu>
        </Box>
    );
}
