module.exports = function updatePost(Post) {
    return async (req, res) => {
        const { idPost, text } = req.body   

        try {
            const updatedPost = await Post.findByIdAndUpdate(idPost, 
                {$set: { description: text }},
                { new: true }
            )
            res.json(updatedPost)
        } catch (error) {
                res.status(500).send('Server error')
        }
    }
}