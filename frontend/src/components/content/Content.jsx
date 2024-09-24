import React from "react";
import { Container, Box } from '@mui/material';

import PostCreationPanel from "./CreatePostButton";
import Posts from "./Posts";
import Loading from "../loading/Loading";
import LoadingText from "../loading/LoadingText";

export default function Content() {
    return (
        <Box 
            sx={{
                marginTop: '53px',
                p: '15px 0 90px 0',
                background: '#dce6f1',
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                '@media (max-width: 340px)': {
                    pb: '155px'
                }
            }}
        >
            <Container 
                maxWidth='sm'
                sx={{
                    '&.MuiContainer-maxWidthSm': {
                        p: '0 5px',
                    },
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    rowGap: 2
                }}
            >
                <PostCreationPanel />
                <Posts />
                <Loading />
                <LoadingText />
            </Container>
        </Box>
    )
}