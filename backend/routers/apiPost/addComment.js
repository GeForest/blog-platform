module.exports = function addComment(Comment, Post) {
    return async (req, res) => {
        try {
            const { idPost } = req.body;

            const newComment = new Comment(req.body)
            await newComment.save()

            const updatePost = await Post.findByIdAndUpdate(idPost,
                {$addToSet: {comments: newComment._id}},
                { new: true }
            ).populate({
                path: 'comments',
                select: 'idUser date comment',
                options: { sort: { date: -1 } },
                populate: {
                    path: 'idUser',
                    select: 'firstName lastName'
                }
            })

            res.json(updatePost)
        } catch (err) {
            console.log('Error add like', err)
            res.sendStatus(500)
        }
    }
}