export default function requests(instance) {
    return {
        signUp(user) {
            return instance.post('signup', user)
        },
        signIn(user) {
            return instance.post('signin', user)
        },
        getDataUser() {
            return instance.get('profile')
        }
    }
}