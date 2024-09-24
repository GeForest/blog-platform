
module.exports = function deleteLike(Like, Post) {
    return async(req, res) => {
        try {
            const { idPost } = req.query
            const foundLike = await Like.findOne(req.query)
            const { _id } = foundLike

            await Post.findByIdAndUpdate(idPost, {
                $pull: { likes: _id}
            })

            await Like.deleteOne(foundLike)

            res.sendStatus(204)
        } catch (err) {
            console.log('Error delate like', err)
            res.sendStatus(500)
        }
    } 
}