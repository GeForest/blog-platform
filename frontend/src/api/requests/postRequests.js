export default function requests(instance) {
    return {
        addPost(post) {
            return instance.post('posts', post)
        },
        getPosts(cursor) {
            return instance.get('posts', { params: {limit: 10, cursor} })
        },
        addLike(like) {
            return instance.post('like', like)
        },
        deleteLike(like) {
            const { idUser, idPost } = like
            return instance.delete('like', { params: { idUser, idPost }})
        },
        updatePost(data) {
            return instance.put('posts', data)
        },
        addComment(comment) {
            return instance.post('comment', comment)
        }
    }
}