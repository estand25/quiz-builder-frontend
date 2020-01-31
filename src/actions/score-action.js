import { actions } from './type'

export const setTitle = (title) => ({
    type: actions.SET_TITLE,
    payload: title
})

export const setQuestionCount = (questionCount) => ({
    type: actions.SET_QUESTION_COUNT,
    payload: questionCount
})