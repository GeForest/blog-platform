import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';

import CustomAvatar from '../../../header/CustomAvatar';

import { formatTime } from '../../../../utils/date/formatTime';

export default function Comment({comment}) {
    const {type} = useSelector(state=>state.postModal)
    const { firstName, lastName } = comment.idUser
    const time = formatTime(comment.date)

    return (
        <Box
            sx={{
                p: '12px 0',
                display: 'flex',
                columnGap: 1,
            }}
        >
            <CustomAvatar values={{firstName, lastName, type}} />
            <Box
                sx={{
                    p: '8px 12px',
                    display: 'flex',
                    flexDirection: 'column',
                    rowGap: '2px',
                    borderRadius: '20px',
                    background: '#e8e8e8',
                    fontFamily: '"Lora", serif',
                    color: '#050505',
                    maxWidth: '100%',
                }}
            >
                <Box 
                    sx={{
                        maxWidth: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: 1,
                        '@media (max-width: 370px)': {
                            flexDirection: 'column',
                            alignItems: 'start'
                        }
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: '13px',
                            fontFamily: '"Lato", sans-serif',
                            lineHeight: '15px',
                        }}
                    >{firstName} {lastName}</Typography>
                    <Box
                        sx={{
                            height: '14px',
                            borderLeft: '1px solid #8c8c8c',
                            '@media (max-width: 370px)': {
                                display: 'none'
                            }
                        }}
                    />
                    <Typography
                        sx={{
                            fontSize: 12,
                            fontFamily: '"Lato", sans-serif',
                        }}
                    >
                        {time}
                    </Typography>
                </Box>
                <Typography
                    sx={{
                        fontSize: 15,
                        fontFamily: '"Lato", sans-serif',
                        lineHeight: '20px',
                    }}
                >{comment.comment}</Typography>
            </Box>
        </Box>
    );
}
