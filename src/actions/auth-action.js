import { actions } from './type'

export const setUser = (data) => ({
    type: actions.SET_USER_ID,
    payload: data
})