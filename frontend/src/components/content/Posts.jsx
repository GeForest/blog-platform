import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";

import Post from "./post/Post";

export default function Posts() {
    const list = useSelector((state)=>state.posts.list)
    
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                rowGap: 5,
                '& > div:nth-of-type(odd)': {
                    transform: 'translateX(-150px)',
                },
                '& > div:nth-of-type(even)': {
                    transform: 'translateX(150px)',
                },
                '@media (max-width: 910px)': {
                    '& > div:nth-of-type(odd)': {
                        transform: 'translateX(-50px)',
                    },
                    '& > div:nth-of-type(even)': {
                        transform: 'translateX(50px)',
                    },
                },
                '@media (max-width: 760px)': {
                    '& > div:nth-of-type(odd)': {
                        transform: 'none',
                    },
                    '& > div:nth-of-type(even)': {
                        transform: 'none',
                    },
                },
            }}
        >
            {list.map(post=>{
                return ( <Post key={post._id} post={post} /> )
            })}
        </Box>
    )
}