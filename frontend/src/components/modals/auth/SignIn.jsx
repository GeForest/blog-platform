import React from "react";
import {
    FormControl,
    Typography, 
    Button, 
    Box,
} 
from '@mui/material';

import CustomTextField from "./CustomTextField";
import CustomIconButton from "../common/CustomIconButton";

export default function SignIn({ formik, handleToggle, handleSubmit, handleClose }) {
    
    return (
        <Box component='form' onSubmit={handleSubmit}
            sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                p: 4,
                width: '100%',
                display: 'flex',
                flexDirection: 'column', 
                alignItems: 'center',
                gap: 3, 
                borderRadius: 2,
                background: '#ffffff',
                boxShadow: 24, 
            }}
        >
            <Typography
                variant="h5"
                color= 'primary'
                fontWeight={700}
                paddingBottom={1}
                textAlign={"center"}
                letterSpacing={.5}
            >
                Войти на DACHNIK
            </Typography>
            <FormControl fullWidth>
                <CustomTextField 
                    label="Email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email || ''}
                ></CustomTextField>
            </FormControl>
            <FormControl fullWidth>
                <CustomTextField
                    label="Password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password || ''}
                ></CustomTextField>
            </FormControl>
            <Button sx={{ textTransform: 'none', fontWeight: 'bold' }} >Забыли пароль?</Button>
            <Button fullWidth type="submit" variant="contained" color= 'success' size="large"
            >
                Войти
            </Button>
            <Button 
                variant="contained"
                sx={{ textTransform: 'none' }} 
                onClick={handleToggle}
            >
                Создать новый аккаунт
            </Button>
            <CustomIconButton handleClose={handleClose} />
        </Box>
    )
}