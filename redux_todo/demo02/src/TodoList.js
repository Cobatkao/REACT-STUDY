import React from 'react'
import { connect } from 'react-redux'
import { changeValueAction, addItemAction } from './store/actionCreator'

const TodoList = (props) => {
    let { inputValue, changeInputValue, addItem } = props
        return (
            <div>
            <div>
                <input
                    value={inputValue}
                    onChange={changeInputValue}
                />
                <button onClick={addItem}>提交</button>
            </div>
            <ul>
                {
                    this.props.list.map((item, index) => {
                        return (<li key={index}>{item}</li>)
                    })
                }
            </ul>
        </div>
        );
}

// 映射state到props，数据就可以改写为this.props.inputValue
const stateToProps = (state) => {
    return {
        list: state.list,
        inputValue: state.inputValue
    }
}

// 映射dispatch到props
const dispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            const action = changeValueAction(e.target.value)
            console.log('传递的action', action)
            dispatch(action) // 派发action到reducer中处理逻辑
        },
        addItem() {
            const action = addItemAction()
            dispatch(action)
        }
    }
}

export default connect(stateToProps, dispatchToProps)(TodoList)