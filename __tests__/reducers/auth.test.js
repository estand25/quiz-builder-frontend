import {auth} from '../../src/actions'
import auth_ from '../../src/reducers/auth'
import {actions} from '../../src/actions/type'

describe('auth reducers with inital state', () => {
    it('should return the inital state', () => {
        const initalState = {
            userId: '',
            userLoading: false,
            error: ''
        }
        expect(auth_(undefined, {})).toEqual(initalState)
    })
})

describe('auth reducers set user id', () => {
    it('should set user with something', () => {
        expect(
            auth_([], auth.setUserId('123456789'))
        ).toEqual(
            {
                userId: '123456789'
            }
        )
    })

    it('should set user with nothing', () => {
        expect(
            auth_([], auth.setUserId(''))
        ).toEqual(
            {
                userId: ''
            }
        )
    })

    it('should set user id pending to true', () =>{
        expect(
            auth_([], auth.GetUserId(true))
        ).toEqual(
            {
                userLoading: true
            }
        )
    })

    it('should set user id pending to false', () =>{
        expect(
            auth_([], auth.GetUserId(false))
        ).toEqual(
            {
                userLoading: false
            }
        )
    })

    it('should set user if full filled with data', () => {
        expect(
            auth_([], auth.GetUserIdFullFilled({a:'a'}))
        ).toEqual(
            {
                userLoading: false,
                userId: {a:'a'}
            }
        )
    })

    it('should set user if reject with data', () => {
        expect(
            auth_([], auth.GetUserIdReject({a:'a'}))
        ).toEqual(
            {
                userLoading: false,
                error: {a:'a'}
            }
        )
    })
})