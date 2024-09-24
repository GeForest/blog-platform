import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';

export default function LoadingText() {
    const { checkedPosts, list } = useSelector(state=>state.posts)
    
    if(checkedPosts || list.length < 10) return
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <Typography
                variant="h6" 
                color='text.secondary'
                sx={{ 
                    padding: '20px',
                    fontWeight: 'bold', 
                    fontFamily: '"Lora", serif',
                    animation: 'fadeIn 2.5s',
                }}
            >
                Вы просмотрели все посты.
            </Typography>
        </Box>
    );
}
