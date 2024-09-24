import React, { useEffect, useRef, useState } from 'react';
import { Typography, Box, Button } from '@mui/material';

export default function PostBody({post}) {
    const [isExpanded, setIsExpanded] = useState(false)
    const [isOverflow, setIsOverflow] = useState(false)
    const textRef = useRef(null)
    const { description } = post

    const toggleExpand = () => setIsExpanded(!isExpanded)
    useEffect(()=>{
        if (textRef.current) {
            setIsOverflow(textRef.current.scrollHeight > textRef.current.clientHeight)
        }
    },[description])

    return (
        <Box
            sx={{
                p: '12px 16px',
                minHeight: '100px',
                borderBottom: '1px solid #b1b1b1'
            }}
        >
            <Typography
                ref={textRef}
                sx={{
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    WebkitLineClamp: isExpanded ? 'none' : 3,
                    color: '#757575'
                }}
            >
                {description}
            </Typography>
            {isOverflow && (
            <Button
                onClick={toggleExpand} 
                sx={{ 
                    '&.MuiButton-text': {
                        p: 0,
                        minWidth: 0,
                        lineHeight: '20px'
                    },
                    ml: 1,
                    fontSize: 15,
                    textTransform: 'none', 
                    color: '#333333',
                }}
            >
                {isExpanded ? 'скрыть' : 'Еще показать'}
            </Button>
            )}
        </Box>
    );
}
