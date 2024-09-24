const express = require('express');
const router = express.Router()

const User = require('../models/User');
const Post = require('../models/Post');
const Like = require('../models/Like')
const Comment = require('../models/Comment')

const signIn = require('./apiUser/signIn');
const signUp = require('./apiUser/signUp');
const authenticateToken = require('./apiUser/authenticateToken');

const addPost = require('./apiPost/addPost')
const getPosts = require('./apiPost/getPosts')
const updatePost = require('./apiPost/updatePost');

const addLike = require('./apiPost/addLike')
const deleteLike = require('./apiPost/deleteLike');
const addComment = require('./apiPost/addComment');

// Requests for Auth
router.get('/profile', authenticateToken, (req, res)=>{
    res.json({
        id: req.user._id,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
    })
})
router.post('/signin', signIn(User))
router.post('/signup', signUp(User))

// Requests for Posts
router.post('/posts', addPost(Post))
router.get('/posts', getPosts(Post))
router.put('/posts', updatePost(Post))

//Requests for Like
router.post('/like', addLike(Like, Post))
router.delete('/like', deleteLike(Like, Post))

// Requests for Comment
router.post('/comment', addComment(Comment, Post))

module.exports = router;