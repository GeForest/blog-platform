module.exports = function getPosts(Post) {
    return async (req, res) => {
        const { limit = 10, cursor } = req.query

        let query = {};
        if (cursor) {

            const [cursorDate, cursorId] = cursor.split(',');
            
            query = {
                $or: [
                    { date: { $lt: new Date(cursorDate) }, _id: { $lt: cursorId } },
                    { date: { $lt: new Date(cursorDate) } }
                ]
            };
        }

        const posts = await Post.find(query)
        .sort({ date: -1, _id: -1 })
        .limit(parseInt(limit))
        .populate({
            path: 'idUser',
            select: 'firstName lastName'
        })
        .populate({
            path: 'likes',
            select: 'idUser'
        })
        .populate({
            path: 'comments',
            select: 'idUser date comment',
            options: { sort: { date: -1 } },
            populate: {
                path: 'idUser',
                select: 'firstName lastName'
            }
        })

        const newCursor = posts.length ? `${posts[posts.length - 1].date.toISOString()},${posts[posts.length - 1]._id}` : null

        let isPosts = true

        if(!posts.length) {
            isPosts = false
            res.json({ isPosts })
        }

        if(isPosts) res.json({ isPosts, posts, newCursor })
    }
}