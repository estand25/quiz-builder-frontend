import {auth} from '../../src/actions'
import auth_ from '../../src/reducers/auth'

describe('auth reducers with inital state', () => {
    it('should return the inital state', () => {
        const initalState = {
            userId: '',
            userLoading: false,
            error: '',
            username: '',
            password: ''
        }
        expect(auth_(undefined, {})).toEqual(initalState)
    })
})

describe('auth reducers set user id', () => {
    it('should set user with something', () => {
        var payload = {
            userId: '123456789',
            username: 'd1',
            password: 'd1w'
        }

        expect(
            auth_([], auth.setUser(payload))
        ).toEqual(
            {
                userId: '123456789',
                username: 'd1',
                password: 'd1w'
            }
        )
    })

    it('should set user with nothing', () => {
        var payload = {
            userId: '',
            username: '',
            password: ''
        }

        expect(
            auth_([], auth.setUser(payload))
        ).toEqual(
            {
                userId: '',
                username: '',
                password: ''
            }
        )
    })
})