import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import './xiaojiejie.css'

import XiaojiejieItem from './xiaojiejieItem'

class Xiaojiejie extends Component {
    constructor(props) {
        super(props) //调用父级的方法 
        this.state = {
            inputValue: '',
            listData: ['基础按摩', '中式固元']
        }
    }

    componentWillMount() {
        // console.log('componnetWillMount ---- 组件将要挂载到页面上')
    }

    componentDidMount() {
        // console.log('componentDidMount ---- 组件挂载完成')
        console.log(this.refs.child)
        console.log(ReactDOM.findDOMNode(this.refs.child))
    }

    // 组件更新且在render之前执行，必须返回布尔值，返回false则不往下执行
    shouldComponentUpdate() {
        // console.log('1 - shouldComponentUpdate ---- 组件应该更新')
        return true
    }

    // 在shouldComponentUpdate之后执行，返回false则不执行
    componentWillUpdate() {
        // console.log('2 - componentWillUpdate ---- 组件即将更新')
        return true
    }

    // 组件更新完毕（渲染成虚拟dom后）执行
    componentDidUpdate() {
        // console.log('4 - componentDidUpdate ---- 组件更新完毕')
    }

    render() {
        // console.log('3 - render ---- 组件挂载中...')
        return (
            <Fragment>
                <div>
                    <label htmlFor="addService">增加服务：</label>
                    {/* 这里是注释 */}
                    <input
                    id="addService"
                    className="inputArea"
                    placeholder="输入你想体验的项目"
                    value={this.state.inputValue}
                    onChange={this.inputChange.bind(this)}
                    />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul className="datalist" ref={(ul) => {this.ul = ul}}>
                    {
                        this.state.listData.map((item, idx) => {
                            return (
                                // <li 
                                //     key={idx + item}
                                //     onClick={this.deleteItem.bind(this, idx)}
                                //     dangerouslySetInnerHTML={{__html: item}}
                                // >
                                // </li>
                                <XiaojiejieItem 
                                    key={idx+item}
                                    content={item}
                                    index={idx}
                                    ref="child"
                                    deleteItem={this.deleteItem.bind(this)}
                                />
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    inputChange(e) {
        // this.state.inputValue = e.target.value // 错误写法
        this.setState({
            inputValue: e.target.value
        })
    }

    addList() {
        if (this.state.inputValue) {
            this.setState({
                listData: [...this.state.listData, this.state.inputValue],
                inputValue: ''
            }, () => {
                console.log(this.ul.querySelectorAll('li').length)
            })
            console.log(this.ul)
        } else {
            alert('输入不能为空')
        }
    }

    deleteItem(idx) {
        // 错误写法 不准直接操作this.state中的数据
        // this.state.listData.splice(idx, 1) // 删除下标对应元素
        // this.setState({
        //     listData: this.state.listData
        // })
        let listArr = this.state.listData
        listArr.splice(idx, 1)
        this.setState({
            listData: listArr
        })
    }
}

export default Xiaojiejie