import { actions } from './type'

export const setBuildList = (quizzies, questions) => ({
    type: actions.SET_BUILD_LIST,
    quizzies,
    questions
})

export const setBuildListQuiz = (quizzies) => ({
    type: actions.SET_BUILD_LIST_QUIZ,
    quizzies
})

export const setBuildListQuestion = (questions) => ({
    type: actions.SET_BUILD_LIST_QUESTION,
    questions
})

export const getBuildList = () => ({
    type: actions.GET_BUILD_LIST
})