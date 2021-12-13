import Api from './Api'

export default {
    index () {
        return Api().get('sessions')
    },
    create(session) {
        return Api().post('sessions',session)
    },
    upcoming () {
        return Api().get('upcomingsessions')

    }
}
