import * as quiz from '../../src/actions/quiz-action'
import { actions } from '../../src/actions/type'

describe('Quiz unit test', () => {
    it('Should create an action to set name', () => {
        
        var payload = {
            name: 'name'
        }

        const expectAction = {
            type: actions.SET_NAME,
            payload
        }

        expect(quiz.setName(payload)).toEqual(expectAction)
    })

    it('Should create an action to set description', () => {
        
        var payload = {
            description: 'description'
        }

        const expectAction = {
            type: actions.SET_DESCRIPTION,
            payload
        }

        expect(quiz.setDescription(payload)).toEqual(expectAction)
    })
    
    it('Should create an action to set status', () => {
        
        var payload = {
            status: false
        }

        const expectAction = {
            type: actions.SET_STATUS,
            payload
        }

        expect(quiz.setStatue(payload)).toEqual(expectAction)
    })
})