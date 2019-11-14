import {CHANGE_INPUT, ADD_VALUE, DELETE_ITEM} from './actionTypes'

const defaultState = {
    inputValue: 'Write Some Here...',
    list: [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
    ]
}

export default (state = defaultState, action) => {
    console.log(state, action)
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
        default:
            return state
    }
}