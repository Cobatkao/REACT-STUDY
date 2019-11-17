import {CHANGE_INPUT, ADD_VALUE, DELETE_ITEM, GET_LIST} from './actionTypes'

const defaultState = {
    inputValue: 'Write Some Here...',
    list: []
}

export default (state = defaultState, action) => {
    console.log('state和action', state, action)
    // reducer可以接收state，但是绝不能修改state，返回的是新的state
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case CHANGE_INPUT:
            newState.inputValue = action.value
            return newState // 返回新的state
        case ADD_VALUE:
            newState.list.push(newState.inputValue)
            newState.inputValue = ''
            return newState
        case DELETE_ITEM:
            newState.list.splice(action.idx, 1)
            return newState
        case GET_LIST:
            console.log(action.data.data.data)
            newState.list = action.data.data.data
            return newState
        default:
            return state
    }
}