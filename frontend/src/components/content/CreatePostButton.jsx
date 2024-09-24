import React from "react";
import { useDispatch } from "react-redux";
import { Typography, Box } from '@mui/material';
import { openModal } from "../../store/reducers/postModalSlice";
import { useAuthAction } from "../../hooks/useAuthAction";


export default function CreatePostButton() {
    const dispatch = useDispatch()
    const handleOpen = useAuthAction(() => {
        dispatch(openModal({post: null, type: 'create'}))
    })
    return (
        <Box sx={{
            padding: '7px 8px',
            display: 'flex',
            alignItems: 'center',
            borderRadius: 2.5,
            background: '#ffffff',
            zIndex: 10
        }}>
            <Box
                onClick={handleOpen}
                sx={{
                    padding: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    columnGap: 1,
                    borderRadius: 2.5,
                    cursor: 'pointer',
                    '&:hover': {
                        background: '#f5f5f5'
                    }
                }}>
                <Box
                    sx={{
                        minWidth: 40,
                        minHeight: 40,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '50%',
                        background: '#e3f2fd'
                    }}
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#0277bd"
                    >
                        <path d="M18 11h-5V6a1 1 0 0 0-2 0v5H6a1 1 0 0 0 0 2h5v5a1 1 0 0 0 2 0v-5h5a1 1 0 0 0 0-2z"></path>
                    </svg>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Typography variant="span"
                        sx={{
                            fontSize: 'clamp(1rem, 5vw, 1.4rem)',
                            fontFamily: '"Roboto", sans-serif',
                            fontWeight: 600,
                            color: '#333333',
                            lineHeight: 1.3,
                            mb: .2,
                        }}
                    >Создать новый пост</Typography>
                    <Typography variant="span"
                        sx={{
                            fontSize: 'clamp(.7rem, 4vw, 1rem)',
                            fontFamily: '"Lora", serif',
                            fontWeight: 400,
                            color: '#757575',
                            lineHeight: 1.2,
                        }}
                    >Поделитесь новыми историями о себе.</Typography>
                </Box>
            </Box>
        </Box>
    )
}