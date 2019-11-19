import {GET_MY_LIST, CHANGE_INPUT, ADD_VALUE, DELETE_ITEM, GET_LIST} from './actionTypes'
import axios from 'axios'

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

export const getListAction = (data) => ({
    type: GET_LIST,
    data
})

export const getTodoList = () => {
    //这个dispatch是applyMiddleware中间件中封装好的 直接会调用store.dispatch
    return (dispatch) => {
        axios.get('http://yapi.demo.qunar.com/mock/38004/mock/api/v1/getlist')
            .then((res) => {
                const data = res.data
                const action = getListAction(data)
                dispatch(action) //传入到store内
            })
    }
}

export const getMyListAction = () => ({
    type: GET_MY_LIST
})