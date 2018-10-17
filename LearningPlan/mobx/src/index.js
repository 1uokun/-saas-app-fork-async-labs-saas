// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";

import TodoList from "./components/TodoList";
import TodoListModel from "./models/TodoListModel";
import TodoModel from "./models/TodoModel";

const store = new TodoListModel();

render(
    <div>
        <DevTools />
        <TodoList store={store} />
    </div>,
    document.getElementById("root")
);

store.addTodo("Get Coffee");
store.addTodo("Write simpler code");
store.todos[0].finished = true;

setTimeout(() => {
    store.addTodo("Get a cookie as well");
}, 2000);

// playing around in the console
window.store = store;