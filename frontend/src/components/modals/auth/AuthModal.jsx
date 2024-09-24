import React, { useRef } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Modal, Box } from '@mui/material';

import SignIn from "./SignIn";
import SignUp from "./SignUp";

import { closeModal, toggleRefLog } from '../../../store/reducers/authModalSlice'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { useFormikHook } from "../../../hooks/useFormikHook";


export default function AuthModal() {
    const {isModal, refLog} = useSelector((state)=>state.authModal)
    const { formik, handleSubmit } = useFormikHook(refLog)
    const dispatch = useDispatch()
    const handleClose = () => {
        formik.resetForm()
        dispatch(closeModal())
    }
    const handleToggle = () => {
        formik.resetForm()
        dispatch(toggleRefLog())
    }
    const signInRef = useRef(null);
    const signUpRef = useRef(null);
    
    return(
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
            justifyContent: 'center'
        }}
        >
            <Box
            sx={{
                position: 'relative',
                width: '90%',
                maxWidth: 400,
            }}
            >
                <TransitionGroup>
                    <CSSTransition
                        nodeRef={refLog ? signUpRef : signInRef}
                        key={refLog ? 'signup' : 'signin'}
                        timeout={500}
                        classNames='fade'
                        unmountOnExit
                    > 
                        <div ref={refLog ? signUpRef : signInRef} style={{ position: 'relative' }}>
                            {refLog ? 
                            <SignUp formik={formik} handleToggle={handleToggle} handleSubmit={handleSubmit} handleClose={handleClose} /> 
                            : 
                            <SignIn formik={formik} handleToggle={handleToggle} handleSubmit={handleSubmit} handleClose={handleClose} />}
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            </Box>
        </Modal>
    )
}