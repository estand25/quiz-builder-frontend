import { actions } from '../actions/type'

const initialState = {
    name: '',
    qOption: '',
    qOptions: [],
    addStatus: false,
    quizList: [],
    quizSelection: '',
    correctAnswer: '',
    point: 0,
    order: 0,
    status: '',
    questions: 0,    
    questionCount: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_NAME: 
            return { ...state, name: action.payload}
        case actions.SET_QOPTION:
            return { ...state, qOption: action.payload}
        case actions.SET_QOPTIONS:
            return { ...state, qOptions: action.payload}
        case actions.SET_ADD_STATUS:
            return { ...state, addStatus: action.payload}
        case actions.SET_QUIZ_LIST:
            return { ...state, quizList: action.payload}
        case actions.SET_QUIZ_SELECTION:
            return { ...state, quizSelection: action.payload}
        case actions.SET_CORRECT_ANSWER:
            return { ...state, correctAnswer: action.payload}
        case actions.SET_POINT:
            return { ...state, point: action.payload}
        case actions.SET_ORDER:
            return { ...state, order: action.payload}
        case actions.SET_STATUS:
            return { ...state, status: action.payload}
        case actions.SET_QUESTION_COUNT:
            return { ...state, questionCount: action.payload}
        default:
            return state
    }
}