import React, { Component } from 'react';
import PropTypes from 'prop-types';

class XiaojiejieItem extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this, this.props.index)
    }

    // 接受props时执行，满足两个条件则执行
    // 1. 组件第一次存在于dom中，函数是不会被执行的 
    // 2. 已经存在于dom中函数才会被执行
    componentWillReceiveProps() {
        // console.log('child - componentWillReceiveProps ---- 子组件接受props')
    }

    // 组件删除时执行
    componentWillUnmount() {
        // console.log('componentWillUnmount ---- 组件将被删除')
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.content === this.props.content
    }

    render() {
        console.log('子组件render...')
        return (
            <li onClick={this.handleClick} ref="grandson">
                {this.props.avname} - 技师为你服务 - 
                {this.props.content}
            </li>
        );
    }

    handleClick(index) {
        console.log(index) //取得索引
        this.props.deleteItem(index)
    }
}

//校验props属性
XiaojiejieItem.propTypes = {
    content: PropTypes.string,
    index: PropTypes.number,
    deleteItem: PropTypes.func,
}
XiaojiejieItem.defaultProps = {
    avname: '苍井空'
}
 
export default XiaojiejieItem;