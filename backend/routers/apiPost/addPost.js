module.exports = function addPost(Post) {
    return async (req, res) => {
        try {
            const newPost = new Post(req.body)
            await newPost.save()

            const postData = await Post.findById(newPost)
            .populate({
                path: 'idUser',
                select: 'firstName lastName'
            })

            res.json({ postData, success: true, message: 'Вы добавили новый пост.' })
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' })
        }
    }
}