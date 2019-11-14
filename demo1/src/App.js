import React, {Component} from 'react'

class App extends Component {
    render() {
        return (
            <div>
                <ul className="list">
                    <li>{false ? 'Javascript' : '脚本语言'}</li>
                    <li>Nodejs</li>
                </ul>
            </div>
        )
    }
}

export default App