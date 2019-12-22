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
            var a = {...state,
                userId: action.payload.userId,
                username: action.payload.username,
                password: action.payload.password,
                email: action.payload.email
            }
            console.log('actions.SET_USER_ID', a);
            
            return a
        default:
            return state
    }
}