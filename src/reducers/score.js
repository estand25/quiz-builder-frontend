import { actions } from '../actions/type'

const initialState = {
    title: '',
    questionCount: 0
}

export default (state = initialState, action) => {
    switch (actions) {
        case actions.SET_TITLE:
            return {...state, title: action.payload}
        case actions.SET_QUESTION_COUNT:
            return {...state, questionCount: action.payload}
        default:
            return state
    }
}