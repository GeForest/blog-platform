import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EditIcon from '@mui/icons-material/Edit';
import { openModal } from '../../../store/reducers/postModalSlice';

export default function PostEditButton({post}) {
    const { id } = useSelector(state=>state.user.user)
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const dispatch = useDispatch()

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
      }
    const handleClose = () => {
        setAnchorEl(null)
    }
    const handleOpen = () => {
        dispatch(openModal({post, type: 'edit'}))
    }
    
    if(post.idUser._id !== id) return

    return (
        <Box
            sx={{
                position: 'absolute',
                top: 5,
                right: 5,
            }}
        >
            <IconButton 
                onClick={handleClick}
            >
                <MoreHorizIcon fontSize='large'/>
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                sx={{
                    '.MuiMenu-list': {
                        p: 0,
                    },
                    '& .MuiPaper-root': {
                        borderRadius: 1,
                        boxShadow: 3,
                        '& .MuiMenuItem-root': {
                            padding: 1,
                            margin: 0,
                        }
                    },
                }}
            >
                <MenuItem onClick={()=>{
                    handleClose()
                    handleOpen()
                }}
                    sx={{
                        fontSize: 10,
                        columnGap: '3px'
                    }}
                >
                    <EditIcon />
                    Редактировать
                </MenuItem>
            </Menu>
        </Box>
    )
}
