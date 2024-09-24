import React from "react";
import {
    FormControl,
    Typography, 
    Button, 
    Box 
} from '@mui/material';

import CustomTextField from "./CustomTextField";
import CustomIconButton from "../common/CustomIconButton";

export default function SignUp({ formik, handleToggle, handleSubmit, handleClose }) {
    
    return (
        <Box
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
                gap: 2, 
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
                Регистрация нового <br /> аккаунта
            </Typography>
            <FormControl fullWidth>
                <CustomTextField
                    label="First name"
                    name="firstName"
                    onChange={formik.handleChange}
                    value={formik.values.firstName || ''}
                ></CustomTextField>
            </FormControl>
            <FormControl fullWidth>
                <CustomTextField
                    label="Last name"
                    name="lastName"
                    onChange={formik.handleChange}
                    value={formik.values.lastName || ''}
                ></CustomTextField>
            </FormControl>
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
            <Button fullWidth variant="contained" color= 'success' size="large" onClick={handleSubmit}
            >
                Зарегистрироваться
            </Button>
            <Button sx={{ textTransform: 'none' }}
            onClick={handleToggle} 
            >
                У меня есть аккаунт
            </Button>
            <CustomIconButton handleClose={handleClose} />
        </Box>
    )
}