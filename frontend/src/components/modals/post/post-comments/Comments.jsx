import React from 'react';
import { Box } from '@mui/material';
import Comment from './Comment';

export default function Comments({post}) {
    const { comments } = post
    return (
        <Box
            sx={{
                m: '0 16px',
                borderTop: '1px solid #b1b1b1'
            }}
        >
            {comments.map(comment=>{
                return <Comment key={comment._id} comment={comment} />
            })}   
        </Box>
    );
}
