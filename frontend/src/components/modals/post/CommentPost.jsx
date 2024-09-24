import React, { useState, useEffect, useRef, useCallback  } from 'react'
import { useSelector } from 'react-redux';
import { Box } from '@mui/material'

import Post from '../../content/post/Post'
import Comments from './post-comments/Comments';
import AddComment from './post-comments/AddComment';
import CustomScroll from '../../scroll/CustomScroll';

export default function CommentPost() {
    const { type, idPost } = useSelector(state=>state.postModal)
    const { list } = useSelector(state=>state.posts)
    const refPost = useRef(null)
    const [maxHeight, setMaxHeight] = useState()
    const [addCommentHeight, setAddCommentHeight] = useState(108)
    
    const calculateMaxHeight = useCallback(() => {
        if (refPost.current) {
            const postHeight = refPost.current.clientHeight;
            const availableHeight = postHeight - addCommentHeight
            setMaxHeight(availableHeight > 0 ? `${availableHeight}px` : '0px')
        }
    }, [addCommentHeight])

    useEffect(() => {
        calculateMaxHeight();
        window.addEventListener('resize', calculateMaxHeight);

        return () => {
            window.removeEventListener('resize', calculateMaxHeight);
        };
    }, [calculateMaxHeight])


    if(type !== 'comment') return

    const post = list.find(post=>post._id === idPost)

    return (
        <Box
             ref={refPost}
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Box 
                sx={{
                    flex: '1 0 auto',
                }}
            >
                <CustomScroll style={{maxHeight}}>
                        <Post post={post} />
                        <Comments post={post} />
                </CustomScroll>
            </Box>
            <Box sx={{ transition: 'height 0.2s ease' }}>
                <AddComment post={post} onHeightChange={setAddCommentHeight} />
            </Box>
        </Box>
    )
}