import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Box } from '@mui/material';
import { closeModal } from '../../../store/reducers/postModalSlice';

import CustomIconButton from '../common/CustomIconButton';
import CreatePost from './CreatePost';
import EditPost from './EditPost';
import CommentPost from './CommentPost';


export default function PostModal() {
    const { isModal, type } = useSelector((state)=>state.postModal)
    const dispatch = useDispatch()
    const handleClose = () => {
        dispatch(closeModal())
    }
    
    return (
        <Modal
        open={isModal}
        onClose={handleClose}
        slotProps={{
            backdrop: {
                sx: {
                    backgroundColor: '#ffffffbf',
                },
            },
        }}
        sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: '0 10px'
        }}
        >
            <Box
                sx={{
                    position: 'relative',
                    height: type === 'comment' ? '90%' : 'none',
                    width: type === 'comment' ? '94%' : '90%',
                    maxWidth: 600,
                    backgroundColor: '#ffffff',
                    borderRadius: 2,
                    boxShadow: 24,
                }}
            >
                <CommentPost />
                <CreatePost />
                <EditPost />
                <CustomIconButton handleClose={handleClose} />
            </Box>
        </Modal>
    );
}
