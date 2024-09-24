import React from 'react';
import { Avatar, Typography } from '@mui/material';

export default function CustomAvatar({values}) {
    const initials = `${values.firstName.charAt(0)}${values.lastName.charAt(0)}`
    return (
        <Avatar
            onClick={values.handleClick}
            sx={{
                width: !values?.type ? 40 : 32,
                height: !values?.type ? 40 : 32,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#e3f2fd',
            }}
        >
            <Typography
                sx={{
                    marginTop: '1.5px',
                    fontSize: !values?.type ? 20 : 16,
                    color: '#0277bd',
                }}
            >{initials}</Typography>
        </Avatar>
    );
}
