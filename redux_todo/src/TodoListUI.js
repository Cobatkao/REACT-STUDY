import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

const TodoListUI = (props) => {
    return (
        <div>
            <div style={{ margin: '10px' }}>
                <Input
                    placeholder={props.inputValue}
                    style={{ width: 250 }}
                    onChange={props.changeInputValue}
                    value={props.inputValue}
                />
                <Button
                    type="primary"
                    style={{ marginLeft: 10 }}
                    onClick={props.clickBtn}
                >增加</Button>
            </div>
            <div style={{ margin: '10px' }}>
                <List
                    size="large"
                    header={<div style={{ fontWeight: 900 }}>今日菜谱</div>}
                    footer={<div style={{ fontWeight: 900 }}>结束</div>}
                    bordered
                    dataSource={props.list}
                    renderItem={(item, index) => <List.Item onClick={() => { props.deleteItem(index) }}>{item}</List.Item>}
                />
            </div>
        </div>
    );
}

// class TodoListUI extends Component {
//     render() {
//         return (
//             <div>
//                 <div style={{ margin: '10px' }}>
//                     <Input
//                         placeholder={this.props.inputValue}
//                         style={{ width: 250 }}
//                         onChange={this.props.changeInputValue}
//                         value={this.props.inputValue}
//                     />
//                     <Button
//                         type="primary"
//                         style={{ marginLeft: 10 }}
//                         onClick={this.props.clickBtn}
//                     >增加</Button>
//                 </div>
//                 <div style={{ margin: '10px' }}>
//                     <List
//                         size="large"
//                         header={<div style={{ fontWeight: 900 }}>今日菜谱</div>}
//                         footer={<div style={{ fontWeight: 900 }}>结束</div>}
//                         bordered
//                         dataSource={this.props.list}
//                         renderItem={(item, index) => <List.Item onClick={() => { this.props.deleteItem(index) }}>{item}</List.Item>}
//                     />
//                 </div>
//             </div>
//         );
//     }
// }

export default TodoListUI;