import React from "react";
import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import PostFooter from "./PostFooter"

import { Box } from "@mui/material";
import PostEditButton from "./PostEditButton";

export default function Post({post}) {
    return (
        <Box       
            sx={{
                position: 'relative',
                paddingTop: '7px',
                borderRadius: 2.5,
                background: '#ffffff',
            }}
        >
            <PostHeader post={post} />
            <PostBody post={post} />
            <PostFooter post={post} />
            <PostEditButton post={post} />
        </Box>
    )
}