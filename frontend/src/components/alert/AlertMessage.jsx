import React from 'react';
import { Alert, Typography } from '@mui/material';
import { styled } from '@mui/material';
import { useSelector } from 'react-redux';


export default function AlertMessage() {
    const {isAlert, type, description} = useSelector((state)=>state.alert)
    
    if (!isAlert || !description.length) return null;
    
    return (
        <StyledAlert severity={type} >
            {description.map((desc, index)=>{
                return <Typography key={index} variant="body2">
                    {desc}
                </Typography>
            })}
        </StyledAlert>
    );
}

const StyledAlert = styled(Alert)(({theme}) => ({
    position: 'fixed',
    bottom: '85px',
    right: '1%',
    alignItems: 'center',
    borderRadius: 20,
    whiteSpace: 'nowrap',
    zIndex: 10000,
    animation: 'showMessageFullScr 3.2s ease',
    '@keyframes showMessageFullScr': {
        '0%': { 
            opacity: 0,
            transform: 'translateX(20px)',
        },
        '20%': { 
            opacity: 1,
            transform: 'translateX(0)',
        },
        '80%': { 
            opacity: 1,
            transform: 'translateX(0)',
        },
        '100%': { 
            opacity: 0,
            transform: 'translateX(20px)',
        },
    },
    '@media (max-width: 760px)': {
        top: '0',
        left: '50%',
        bottom: 'unset',
        right: 'unset',
        transform: 'translate(-50%, 0)',
        animation: 'showMessage 3.2s ease',
    },
    '@keyframes showMessage': {
        '0%': { 
            opacity: 0,
            transform: 'translate(-50%, -20%)',
        },
        '20%': { 
            opacity: 1,
            transform: 'translate(-50%, 60px)',
        },
        '80%': { 
            opacity: 1,
            transform: 'translate(-50%, 60px)',
        },
        '100%': { 
            opacity: 0,
            transform: 'translate(-50%, -20%)',
        },
    },
    '@media (max-width: 350px)': {    
        '@keyframes showMessage': {
            '0%': { 
                opacity: 0,
                transform: 'translate(-50%, -20%)',
            },
            '20%': { 
                opacity: 1,
                transform: 'translate(-50%, 5px)',
            },
            '80%': { 
                opacity: 1,
                transform: 'translate(-50%, 5px)',
            },
            '100%': { 
                opacity: 0,
                transform: 'translate(-50%, -20%)',
            },
        },
    },
}));