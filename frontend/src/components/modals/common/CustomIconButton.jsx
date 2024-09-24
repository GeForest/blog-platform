import React from 'react';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function CustomIconButton({handleClose}) {
    return (
        <IconButton
            color='primary'
            sx={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                background: '#ffffff',
                border: '2px solid #0070f3',
                zIndex: 10
            }}
            aria-label="Close"
            onClick={handleClose}
        >
            <CloseIcon />
        </IconButton>
    );
}
