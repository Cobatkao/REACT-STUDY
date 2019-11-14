import React, { Component } from 'react';
import store from './store'
import { changeInputAction, addValueAction, deleteItemAction } from './store/actionCreators'
import TodoListUI from './TodoListUI'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.changeInputValue = this.changeInputValue.bind(this) // 绑定箭头函数
    this.storeChange = this.storeChange.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    // this.clickBtn = this.clickBtn.bind(this)
    // 监听store里面的变化，只要store里面的数据发生改变，则立即执行subscribe函数里的函数
    store.subscribe(this.storeChange)
  }

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        changeInputValue={this.changeInputValue}
        clickBtn={this.clickBtn}
        deleteItem={this.deleteItem}
      />
    );
  }

  changeInputValue(e) {
    store.dispatch(changeInputAction(e.target.value))
  }

  storeChange() {
    // 感知store发生变化之后，从store里获取最新的数据，然后进行设置
    console.log('----触发视图更新----')
    this.setState(store.getState())
  }

  clickBtn = () => {
    store.dispatch(addValueAction())
  }

  deleteItem(idx) {
    console.log(idx)
    store.dispatch(deleteItemAction(idx))
  }
}

export default TodoList;
