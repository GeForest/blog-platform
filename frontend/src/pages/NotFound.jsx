import React from "react";
import { Link } from 'react-router-dom'

import { Container, Typography, Button, Box } from '@mui/material';



export function NotFound() {

    return(
        <Container
            disableGutters
            maxWidth={false}
            sx={{
            width: '100vw',
            height: '100vh',
            background: '#3e3e3e',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}
        >
            <Box
                textAlign= 'center'
                sx={{
                    color: '#f5f5f5',
                    background: '#424242',
                    padding: 3,
                    borderRadius: 2,
                    boxShadow: 3,
                    maxWidth: '90%',
                    width: 400,
                }}
            >
                <Typography 
                    variant="h4"
                    sx={{ marginBottom: 2 }}
                >
                    Error 404 not found page!
                </Typography>
                <Button
                    component={Link}
                    to='/'
                    variant="contained" 
                    sx={{ marginTop: 2 }}
                >
                    Return to the main page
                </Button>
            </Box>
        </Container>
    )
}