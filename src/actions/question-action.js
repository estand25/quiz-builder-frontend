import { actions } from './type'

export const setName = name => ({
    type: actions.SET_NAME,
    payload: name
})

export const setQOption = qOption => ({
    type: actions.SET_QOPTION,
    payload: qOption
})

export const setQOptions = qOptions => ({
    type: actions.SET_QOPTIONS,
    payload: qOptions
})

export const setAddStatus = addStatus => ({
    type: actions.SET_ADD_STATUS,
    payload: addStatus
})

export const setQuizList = quizList => ({
    type: actions.SET_QUIZ_LIST,
    payload: quizList
})

export const setQuizSelection = quizSelection => ({
    type: actions.SET_QUIZ_SELECTION,
    payload: quizSelection
})

export const setCorrectAnswer = correctAnswer => ({
    type: actions.SET_CORRECT_ANSWER,
    payload: correctAnswer
})

export const setPoint = point => ({
    type: actions.SET_POINT,
    payload: point
})

export const setOrder = order => ({
    type: actions.SET_ORDER,
    payload: order
})

export const setStatus = status => ({
    type: actions.SET_STATUS,
    payload: status
})

export const setQuestionCount = questionCount => ({
    type: actions.SET_QUESTION_COUNT,
    payload: questionCount
})

export const setAllQuestion = (data) => ({
    type: actions.SET_ALL_QUESTION,
    payload: data
})