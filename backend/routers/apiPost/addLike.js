module.exports = function addLike(Like, Post) {
    return async (req, res) => {
        try {
            const { idPost } = req.body;
            const newLike = new Like(req.body)
            await newLike.save()

            await Post.findByIdAndUpdate(idPost, {
                $addToSet: {likes: newLike._id} 
            })

            res.sendStatus(204)
        } catch (err) {
            console.log('Error add like', err)
            res.sendStatus(500)
        }
    }
}