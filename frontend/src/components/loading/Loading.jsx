import React from 'react';
import { Box, CircularProgress  } from '@mui/material';
import { useSelector } from 'react-redux';


export default function Loading() {
    const {loading} = useSelector(state=>state.posts)
    
    if(!loading) return
    return (
        <Box 
            sx={{
                display: 'flex',
                justifyContent: 'center'
            }}
        >
            <CircularProgress />
        </Box>
    );
}
