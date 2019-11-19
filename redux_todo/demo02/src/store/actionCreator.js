import { CHANGE_VALUE, ADD_ITEM } from './actionTypes'

export const changeValueAction = (payload) => {
    return ({
        type: CHANGE_VALUE,
        payload
    })
}

export const addItemAction = () => {
    return ({
        type: ADD_ITEM
    })
}