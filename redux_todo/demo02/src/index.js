import React from 'react';
import ReactDOM from 'react-dom';
import TodoListPage from './TodoList'
import { Provider } from 'react-redux'
import store from './store'

const App = (
    <Provider store={store}>
        <TodoListPage />
    </Provider>
 )

ReactDOM.render(App, document.getElementById('root'));


