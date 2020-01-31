import { actions } from './type'
import api from '../api'

export const setUser = (data) => ({
    type: actions.SET_USER_ID,
    payload: data
})

export const setUserReject = (data) => ({
    type: actions.SET_USER_ID_REJECT,
    error: data
})

export const logIn = (username, password) => {
    return async dispatch => {
        dispatch(setUser(''))

        const payload = {
            username: username,
            password: password
        }

        api.SignInUser(payload)
            .then(res => {
                if(res.data.success === true){
                    var user = res.data.data    
                    payload.userId = user._id
                    payload.email = user.email

                    dispatch(setUser(payload))
                }
            }).catch(err => {
                dispatch(setUserReject(err))
            })
    }
}