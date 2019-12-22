import * as auth from '../../src/actions/auth-action'
import { actions } from '../../src/actions/type'

describe('User set', () => {
    it('should create an action to set user', () => {
        var payload = {
            userId: '123456789',
            username: 'd1',
            password: 'd1w'
        }

        const expectAction = {
            type: actions.SET_USER_ID,
            payload
        }

        expect(auth.setUser(payload)).toEqual(expectAction)
    })

    it('should create an action to empty set user', () => {
        var payload = {
            userId: '',
            username: '',
            password: ''
        }
        
        const expectAction = {
            type: actions.SET_USER_ID,
            payload
        }

        expect(auth.setUser(payload)).toEqual(expectAction)
    })
})