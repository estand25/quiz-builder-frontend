import { actions } from '../actions/type'

const initalState = {
    userId: '',
    userLoading: false,
    error: '',
    username: '',
    password: '',
    email: ''
}

export default (state = initalState, action ) => {
    switch (action.type) {
        case actions.SET_USER_ID:
            return {...state,
                userId: action.payload.userId,
                username: action.payload.username,
                password: action.payload.password,
                email: action.payload.email
            }
        default:
            return state
    }
}