import React from 'react';
import { TextField } from '@mui/material';

const CustomTextField = ({ ...props }) => (
  <TextField
    variant="filled"
    size="small"
    sx={{
      '& .MuiFilledInput-root': {
        backgroundColor: '#ffffff00',
        borderRadius: 1.5,
        border: '1px solid #898989bf',
        position: 'relative',
        '&:hover': {
          borderColor: '#000000bf',
        },
        '&.Mui-focused': {
          '&::after': {
            content: '""',
            position: 'absolute',
            top: -5,
            left: -5,
            right: -5,
            bottom: -5,
            border: '2px solid #0070f3',
            borderRadius: 2.5,
            pointerEvents: 'none',
          },
        },
        '&::before, &::after': {
          content: 'none',
        },
      },
    }}
    {...props}
  />
);

export default CustomTextField