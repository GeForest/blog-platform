import React from 'react';
import { Button } from '@mui/material';

export default function CustomButton({ onClick, isLike, children }) {
    return (
        <Button
            sx={{
                '&.MuiButton-text': {
                    p: '6px 16px',
                    lineHeight: 0,
                    letterSpacing: .2
                },
                display: 'flex',
                columnGap: '4px',
                fontSize: 15,
                textTransform: 'none',
                color: !isLike ? '#65676b' : '#339AF0',
                '&:hover': {
                    borderRadius: 1.5,
                    background: '#f4f4f4'
                }
            }}
            onClick={onClick}
        >
            {children}
        </Button>
    );
}
