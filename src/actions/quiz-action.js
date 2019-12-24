import { actions } from './type'

export const setName = (name) => ({
    type: actions.SET_NAME,
    payload: name
})

export const setDescription = (description) => ({
    type: actions.SET_DESCRIPTION,
    payload: description
})

export const setStatue = (status) => ({
    type: actions.SET_STATUS,
    payload: status
})