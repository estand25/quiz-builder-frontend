import { actions } from './type'

export const setUserId = userId => ({
    type: actions.SET_USER_ID
})

export const GetUserId = (bool) => ({
    type: actions.GET_USER_ID_PENDING,
    loading: bool
})

export const GetUserIdFullFilled = (data) => ({
    type: actions.GET_USER_ID_FULLFILLED,
    payload: data,
    loading: false
})

export const GetUserIdReject = (error) => ({
    type: actions.GET_USER_ID_REJECT,
    payload: error,
    loading: false
})