import React from 'react';
import { Box, TextField, Typography, Button } from '@mui/material';

export default function PostForm({values}) {

    return (
        <Box
            component='form'
            sx={{
                display: 'flex',
                flexDirection: 'column', 
                gap: 2.5, 
                alignItems: 'center',
                p: 4,
            }}
        >
            <Typography variant="h6" sx={{ textAlign: 'center', fontSize: 16, color: '#0070f3' }}>
                {values.text.title}
            </Typography>
            <TextField
                label="Введите текст поста"
                multiline
                rows={6}
                value={values.textPost}
                sx={{ width: '100%' }}
                onChange={values.handleTextField}
            />
            <Button 
                variant='contained'
                sx={{
                    alignSelf: 'center',
                    mt: 2,
                    px: 3,
                    py: 1.5,
                }}
                onClick={values.handleButton}
            >
                {values.text.textButton}
            </Button>
        </Box>
    );
}
