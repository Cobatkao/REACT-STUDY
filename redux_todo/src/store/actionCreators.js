import {CHANGE_INPUT, ADD_VALUE, DELETE_ITEM} from './actionTypes'

export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value
})

export const addValueAction = () => ({
    type: ADD_VALUE,
})

export const deleteItemAction = (idx) => ({
    type: DELETE_ITEM,
    idx
})