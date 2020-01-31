import * as score from '../../src/actions/score-action'
import { actions } from '../../src/actions/type'

describe('Score Unit Test', () => {
    it('Should create an action create to set title', () => {
        var payload = {
            title: 'title'
        }

        const expectAction = {
            type: actions.SET_TITLE,
            payload
        }

        expect(score.setTitle(payload)).toEqual(expectAction)
 
    })

    it('Should create an action create to set question count', () => {
        var payload = {
            questionCount: 0
        }

        const expectAction = {
            type: actions.SET_QUESTION_COUNT,
            payload
        }

        expect(score.setQuestionCount(payload)).toEqual(expectAction)
 
    })
})
