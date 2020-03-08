import React, { Component } from 'react'

import TodoItem from '../todo-item/TodoItem';

export default class TodoList extends Component {
    render() {
        return (
            <div>
                hello from todo list
                <TodoItem />
            </div>
        )
    }
}
