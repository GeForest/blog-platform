import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, IconButton, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CustomAvatar from '../../../header/CustomAvatar';
import { addComment } from '../../../../utils/post-utils/addComment';
import CustomScroll from '../../../scroll/CustomScroll';

export default function AddComment({post, onHeightChange}) {
    const { firstName, lastName, id } = useSelector(state=>state.user.user)
    const {type} = useSelector(state=>state.postModal)
    const idPost = post._id
    const idUser = id

    const [comment, setComment] = useState('')
    const dispatch = useDispatch()
    const refContainer = useRef(null)

    useEffect(() => {
        const updateHeight = () => {
            if (refContainer.current) {
                const newHeight = refContainer.current.scrollHeight
                onHeightChange(newHeight)
            }
        }

        updateHeight()

        const observer = new ResizeObserver(updateHeight)
        if (refContainer.current) {
            observer.observe(refContainer.current)
        }

        return () => {
            observer.disconnect()
        }
    }, [onHeightChange, comment])

    const handleTextComment = (e) => setComment(e.target.value)

    const handleButton = () => {
        addComment(dispatch, {idPost, idUser, comment})
        setComment('')
    }
    
    return (
        <Box
            ref={refContainer}
            sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                p: '10px 16px 14px',
                display: 'flex',
                columnGap: 1,
                transition: 'height 0.2s ease'
            }}
        >
            <CustomAvatar values={{firstName, lastName, type}} />
            <Box
                sx={{
                    width: '100%',
                    borderRadius: '18px',
                    background: '#e8e8e8',
                }}
            >
                <CustomScroll style={{maxHeight: '120px'}}>
                    <TextField
                        multiline
                        placeholder='Оставьте комментарий...'
                        value={comment}
                        onChange={handleTextComment}
                        sx={{ 
                            width: '100%',
                            '& .MuiOutlinedInput-root': {
                                p: '8px 12px',
                                fontSize: 14,
                                color: '#616161',
                                '& fieldset': {
                                    border: 'none',
                                },
                            },
                        }}
                    />
                </CustomScroll>
                <Box
                    sx={{
                        p: '0 6px',
                        height: 48,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                    }}
                >
                    <IconButton 
                        sx={{
                            height: 36,
                            width: 36
                        }}
                        onClick={handleButton}
                        disabled={!comment}
                    >
                        <SendIcon color={ comment ? 'primary' : 'disabled'}/>
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
}
