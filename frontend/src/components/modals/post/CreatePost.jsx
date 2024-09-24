import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { showAlert } from '../../../store/reducers/alertSlice';

import { addPost } from '../../../utils/post-utils/addPost';
import PostForm from './PostForm';

export default function CreatePost() {
    const [postText, setPostText] = useState('')
    const { id } = useSelector(state=>state.user.user)
    const { isText } = useSelector(state=>state.alert.message)
    const { type } = useSelector(state=>state.postModal)
    
    const dispatch = useDispatch()

    const handleTextField = (e) => setPostText(e.target.value)

    const handleButton = () => {  
        if(!postText) return dispatch(showAlert({type: isText.type, message: [isText.message]}));
        
        addPost({idUser: id, description: postText}, dispatch)
        setPostText('')
    }

    if(type !== 'create') return 

    const values = {handleTextField, handleButton, text: {title: 'Создайте публикацию', textButton: 'Добавить пост'}}
    
    return (
        <PostForm values={values} />
    );
}
