import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showAlert } from '../../../store/reducers/alertSlice';

import PostForm from './PostForm';
import { updatePost } from '../../../utils/post-utils/updatePost';

export default function EditPost() {
    const { isText } = useSelector(state=>state.alert.message)
    const { type, post } = useSelector(state=>state.postModal)
    const [textPost, setTextPost] = useState(post?.description)

    const dispatch = useDispatch()

    const handleTextField = (e) => setTextPost(e.target.value)

    const handleButton = () => {  
        if(!textPost) return dispatch(showAlert({type: isText.type, message: [isText.message]}));
        
        updatePost(dispatch, {idPost: post._id, text: textPost})
        setTextPost('')
    }

    if(type !== 'edit') return

    const values = {handleTextField, handleButton, text: {title: 'Редактировать публикацию', textButton: 'Сохранить изменения'}, textPost}

    return (
        <PostForm values={values} />
    );
}
