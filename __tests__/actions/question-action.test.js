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
})