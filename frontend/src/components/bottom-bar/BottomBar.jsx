import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, Typography } from '@mui/material';
import { openModal, toggleRefLog } from '../../store/reducers/authModalSlice';

export default function BottomBar() {
    const { isModal } = useSelector(state=>state.authModal)
    const { token } = useSelector(state=>state.user)
    const dispatch = useDispatch()
    const refLog = useRef(null)
    const handleOpenModal = () => {   
        dispatch(openModal())
    }
    const handleRegisterClick = () => {   
        dispatch(openModal())
        dispatch(toggleRefLog())
    }
    if(isModal || token) return null
    return (
        <Box
            sx={{
                padding: 1,
                position: 'fixed',
                bottom: 0,
                left: 0,
                width: '100%',
                minHeight: 80,
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                columnGap: '5px',
                bgcolor: 'background.paper',
                boxShadow: '0px 3px 20px rgba(0, 0, 0, 0.35)',
                '@media (max-width: 768px)': {
                    flexDirection: 'column',
                    rowGap: '7px'
                }
            }}
        >
            <Typography
                sx={{ 
                    fontFamily: '"Roboto", sans-serif',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#0070f3',
                    lineHeight: 1.3,
                    textAlign: 'center',
                    '@media (max-width: 768px)': {
                        maxWidth: 'calc(100% - 100px)',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap'
                    }
                }}
            >
                Входи или регистрируйся, чтобы общаться,
                делиться публикациями и многое другое на платформе DACHNIK.
            </Typography>
            <Box 
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    columnGap: 1.5,
                    '@media (max-width: 340px)' : {flexDirection: 'column', justifyContent: 'center'}
                }}
            >
                <Button onClick={handleOpenModal} variant="contained" size="large">Вход</Button>
                <Typography
                    sx={{
                        color: '#1976d2'
                    }}
                >или</Typography>
                <Button ref={refLog} onClick={handleRegisterClick} variant="outlined" color= 'success' size="large">Зарегистрироваться</Button>
            </Box>
        </Box>
    );
}
