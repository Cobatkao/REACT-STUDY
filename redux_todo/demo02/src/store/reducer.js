import { CHANGE_VALUE, ADD_ITEM } from './actionTypes'

const defaultState = {
    inputValue : 'hello world',
    list: []
}

export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case CHANGE_VALUE:
            newState.inputValue = action.payload
            return newState
        case ADD_ITEM:
            newState.list.push(newState.inputValue)
            newState.inputValue = ''
            return newState
        default:
            break;
    }
}