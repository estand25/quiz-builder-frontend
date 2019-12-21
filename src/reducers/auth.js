import { actions } from '../actions/type'

const initalState = {
    userId: '',
    userLoading: false,
    error: ''
}

export default (state = initalState, action ) => {
    switch (action.type) {
        case actions.SET_USER_ID:
            var a = {...state,
                userId: action.userId
            }
            console.log('actions.SET_USER_ID', a);
            
            return a
        case actions.GET_USER_ID_PENDING:
            var b = {...state,
                userLoading: action.loading
            }
            console.log('actions.GET_USER_ID_PENDING', b);
            
            return b
        case actions.GET_USER_ID_FULLFILLED:
            var c = {...state,
                userLoading: action.loading, userId: action.userId
            }
            console.log('actions.GET_USER_ID_FULLFILLED', c);

            return c
        case actions.GET_USER_ID_REJECT:
            var d = {...state,
                userLoading: action.loading, error: action.payload
            }
        default:
            return state
    }
}