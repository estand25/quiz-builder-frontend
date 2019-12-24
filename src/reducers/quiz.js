import { actions } from '../actions/type'

const initialState = {
    name: '',
    description: '',
    status: false  
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_NAME: 
            return { ...state, name: action.payload}
        case actions.SET_DESCRIPTION:
            return { ...state, description: action.payload}
        case actions.SET_STATUS:
            return { ...state, status: action.payload}
        default:
            return state
    }
}