import * as auth from '../../src/actions/auth-action'
import { actions } from '../../src/actions/type'

describe('User set', () => {
    it('should create an action to set user', () => {
        const userId = '12345'
        const expectAction = {
            type: actions.SET_USER_ID,
            userId
        }

        expect(auth.setUserId(userId)).toEqual(expectAction)
    })

    it('should create an action to empty set user', () => {
        const userId = ''
        const expectAction = {
            type: actions.SET_USER_ID,
            userId
        }

        expect(auth.setUserId(userId)).toEqual(expectAction)
    })
})

describe('Get User id', () => {
    it('should create an action to set user id pending to true', () => {
        const bool = true
        const expectAction = {
            type: actions.GET_USER_ID_PENDING,
            loading: bool
        }

        expect(auth.GetUserId(bool)).toEqual(expectAction)
    })

    it('should create an action to set user id pending to false', () => {
        const bool = false
        const expectAction = {
            type: actions.GET_USER_ID_PENDING,
            loading: bool
        }

        expect(auth.GetUserId(bool)).toEqual(expectAction)
    })
})

describe('Get User id Full Filled', () => {
    it('should create an action to set user information', () => {
        const data = {a: 'a'}
        const expectAction = {
            type: actions.GET_USER_ID_FULLFILLED,
            payload: data,
            loading: false
        }

        expect(auth.GetUserIdFullFilled(data)).toEqual(expectAction)
    })
})

describe('Get User id is reject', () => {
    it('should create an action to set user reject', () => {
        const error = {a: 'a'}
        const expectAction = {
            type: actions.GET_USER_ID_REJECT,
            payload: error,
            loading: false
        }

        expect(auth.GetUserIdReject(error)).toEqual(expectAction)
    })
})