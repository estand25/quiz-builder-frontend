import * as question from '../../src/actions/question-action'
import { actions } from '../../src/actions/type'

describe('Questions Unit Test', () => {
    it('Should create an action to set name', () => {
        var payload = {
            name: 'name'
        }

        const expectAction = {
            type: actions.SET_NAME,
            payload
        }

        expect(question.setName(payload)).toEqual(expectAction)
    })

    it('Should create an action to set qOption', () => {
        var payload = {
            qOption: 'qOption'
        }

        const expectAction = {
            type: actions.SET_QOPTION,
            payload
        }

        expect(question.setQOption(payload)).toEqual(expectAction)
    })

    it('should create an action to set Qoptions', () => {
        var payload = {
            qOptions: ['a','b']
        }

        const expectAction = {
            type: actions.SET_QOPTIONS,
            payload
        }

        expect(question.setQOptions(payload)).toEqual(expectAction)
    })

    it('should create an action to set add status', () => {
        var payload = {
            addStatue: false
        }

        const expectAction = {
            type: actions.SET_ADD_STATUS,
            payload
        }

        expect(question.setAddStatus(payload)).toEqual(expectAction)
    })

    it('should create an action to set quiz list', () => {
        var payload = {
            quizList: ['a','b']
        }

        const expectAction = {
            type: actions.SET_QUIZ_LIST,
            payload
        }

        expect(question.setQuizList(payload)).toEqual(expectAction)
    })

    it('should create an action to set quiz selection', () => {
        var payload = {
            quizSelection: 'quizSelection'
        }

        const expectAction = {
            type: actions.SET_QUIZ_SELECTION,
            payload
        }

        expect(question.setQuizSelection(payload)).toEqual(expectAction)
    })

    it('should create an action to set correct answer', () => {
        var payload = {
            correctAnswer: 'correctAnswer'
        }

        const expectAction = {
            type: actions.SET_CORRECT_ANSWER,
            payload
        }

        expect(question.setCorrectAnswer(payload)).toEqual(expectAction)
    })

    it('should create an action to set point', () => {
        var payload = {
            point: 1
        }

        const expectAction = {
            type: actions.SET_POINT,
            payload
        }

        expect(question.setPoint(payload)).toEqual(expectAction)
    })

    it('should create an action to set order', () => {
        var payload = {
            order: 1
        }

        const expectAction = {
            type: actions.SET_ORDER,
            payload
        }

        expect(question.setOrder(payload)).toEqual(expectAction)
    })

    it('should create an action to set order', () => {
        var payload = {
            order: 1
        }

        const expectAction = {
            type: actions.SET_ORDER,
            payload
        }

        expect(question.setOrder(payload)).toEqual(expectAction)
    })

    it('should create an action to set question count', () => {
        var payload = {
            questionCount: 1
        }

        const expectAction = {
            type: actions.SET_QUESTION_COUNT,
            payload
        }

        expect(question.setQuestionCount(payload)).toEqual(expectAction)
    })
})