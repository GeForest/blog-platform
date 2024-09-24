import React from 'react';
import { useDispatch } from 'react-redux';
import {
    FormControl,
    TextField,
    Button, 
    Box,
    useMediaQuery
} from '@mui/material';
import { useFormikHook } from "../../hooks/useFormikHook";
import { openModal } from '../../store/reducers/authModalSlice';

export default function HeaderForm() {
    const { formik, handleSubmit } = useFormikHook(false)
    const isSmallScreen = useMediaQuery('(max-width: 825px)')
    const dispatch = useDispatch()
    const handleOpen = () => dispatch(openModal()) 

    return (
        <Box component='form' onSubmit={handleSubmit} sx={{ display: 'flex', gap: 2, alignItems: 'center', marginRight: 3.5}}>
            <FormControl 
                sx={{
                    '@media (max-width: 825px)': {
                        display: 'none'
                    }
                }}
            >
                <TextField 
                label="Email"
                name="email"
                variant="filled"
                size="small"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                ></TextField>
            </FormControl>
            <FormControl 
                sx={{
                    '@media (max-width: 825px)': {
                        display: 'none'
                    }
                }}
            >
                <TextField
                label="Password"
                name="password"
                type="password"
                variant="filled"
                size="small"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                ></TextField>
            </FormControl>
            <Button 
                type={isSmallScreen ? undefined : "submit"}
                onClick={isSmallScreen ? handleOpen : undefined}
                variant="contained" size="large"
                sx={{'@media (max-width: 250px)': {display: 'none'}}}
            >Вход</Button>
            <Button sx={{ 
                textTransform: 'none', 
                minWidth: 116,
                '@media (max-width: 825px)': {
                    display: 'none'
                } 
                }} >Забыли пароль?</Button>
        </Box>
    );
}
