import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, styled } from '@mui/material';

import iconLike from '../../../assets/icon/iconLike.png'
import iconLikeActive from '../../../assets/icon/iconLikeActive.png'
import iconComment from '../../../assets/icon/iconComment.png'
import iconIsLike from '../../../assets/icon/iconIsLike.png'

import { openModal } from '../../../store/reducers/postModalSlice';

import CustomButton from './CustomButton';
import { addLike } from '../../../utils/post-utils/addLike';
import { deleteLike } from '../../../utils/post-utils/deleteLike';
import { setIsLocalLike } from '../../../store/reducers/postsSlice';
import { useAuthAction } from '../../../hooks/useAuthAction';

export default function PostFooter({post}) {
    const  { user } = useSelector(state=>state.user)
    const  { isLocalLike } = useSelector(state=>state.posts)
    const { likes, comments } = post
    const idPost = post._id 
    const idUser = user?.id

    const isLike = likes.some(like=>like.idUser === idUser)
    

    const dispatch = useDispatch()

    const handleLike = useAuthAction(() => {
        dispatch(setIsLocalLike(!isLike))
        if(!isLike) {
            addLike(dispatch, { idUser, idPost })
        } else {
            deleteLike(dispatch, { idUser, idPost })
        }
    })

    const handleComment = useAuthAction(() => {
        dispatch(openModal({post, type: 'comment', idPost}))
    })

    

    return (
        <Box>       
            {(likes.length > 0 || comments.length > 0) && 
            <Box
                sx={{
                    m: '0 16px',
                    p: '10px 2px',
                    display: 'flex',
                    borderBottom: '1px solid #b1b1b1'
                }}
            >
                {likes.length > 0 && (
                <Box>
                    <Box
                        component='img'
                        src={iconIsLike}
                        alt='isLike icon'
                    />
                    <Box
                        component='span'
                        sx={{
                            pl: '7px',
                            lineHeight: '20px',
                            color: '#65676b',
                            fontSize: '15px'
                        }}
                    >
                        {likes.length}
                    </Box>
                </Box>
                )}
                {comments.length > 0 && (
                <Box
                    sx={{ml: 'auto'}}
                >
                    <Box
                        component='span'
                        sx={{
                            pr: '6px',
                            lineHeight: '20px',
                            color: '#65676b',
                            fontSize: '15px'
                        }}
                    >
                        {comments.length}
                    </Box>
                    <Box
                        component='img'
                        src={iconComment}
                        alt='comment icon'
                    />
                </Box>
                )}
            </Box>}
            <Box
                sx={{
                    p: '6px 0',
                    display: 'flex',
                    justifyContent: 'space-around'
                }}
            >
                <CustomButton onClick={handleLike} isLike={isLike}>
                    <StyledLikeButton like={{isLocalLike, isLike}}
                        component='img' 
                        src={!isLike ? iconLike : iconLikeActive} 
                        alt='like icon'
                    />
                    <Box
                        component="span"
                        sx={{ lineHeight: '20px', paddingTop: '1px'}}
                    >
                        <Typography sx={{
                            '@media (max-width: 370px)': {
                                display: 'none'
                            }
                        }}>
                            Нравится
                        </Typography>
                    </Box>
                </CustomButton>
                <CustomButton onClick={handleComment}>
                    <Box
                        component='img' 
                        src={iconComment} 
                        alt='comment icon'
                        sx={{ width: 20, height: 20 }}
                    />
                    <Box
                        component="span"
                        sx={{ lineHeight: '20px', paddingTop: '1px' }}
                    >
                        <Typography sx={{
                            '@media (max-width: 370px)': {
                                display: 'none'
                            }
                        }}>
                            Комментировать
                        </Typography>
                    </Box>
                </CustomButton>
            </Box>
        </Box>
    );
}


const StyledLikeButton = styled(Box, { shouldForwardProp: (prop) => prop !== 'like' })(({ like })=>({
    width: 20, 
    height: 20,
    animation: like.isLocalLike && like.isLike ? 'likeAnimation 0.6s ease, pulse 1s ease 10' : 'none',
    '@keyframes likeAnimation': {
        '0%': { transform: 'rotate(0deg) scale(1)' },
        '50%': { transform: 'rotate(-15deg) scale(1.6)' },
        '100%': { transform: 'rotate(0deg) scale(1)' },
    },
    '@keyframes pulse': {
        '0%': { opacity: 1 },
        '50%': { opacity: 0.7 },
        '100%': { opacity: 1 },
    },
}))