import React from 'react';
import { styled } from '@mui/material'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

export default function CustomScroll({children, style}) {
    
    return (
        <StyledSimpleBar style={style}>
            {children}
        </StyledSimpleBar>
    );
}

const StyledSimpleBar = styled(SimpleBar, { shouldForwardProp: (prop) => prop !== 'style' })(({ style }) => ({
    maxHeight: style.maxHeight,
}))