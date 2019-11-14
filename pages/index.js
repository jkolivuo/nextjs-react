import withAppLayout from '../containers/AppContainer';
import '../styles/main.css';
import React from 'react'
import TodoStore from '../stores/TodoStore';
import { Input, List, notification } from 'antd';
import TodoItem from '../components/TodoItem';
import { observer } from 'mobx-react';

class Home extends React.Component {

    constructor() {
        super();
        this.todoStore = TodoStore.create({ todos: []});    
    }

    handleClick(e) {
        if(e.key === 'Enter') {
            this.todoStore.addTodo({
                id: Math.floor(Math.random() * 1000) + 1,
                title: e.currentTarget.value,
                done: false
            });
            
        }
    }


    render() {
        return (
            <div>
                <h1>Home</h1>
                <h4>Todos: {this.todoStore.todoCount}</h4>
                <h3>Add new Todo</h3>
                <Input placeholder="new todo"
                    size="large"
                    type="text"
                    allowClear={true}
                    onKeyDown={this.handleClick.bind(this)}
                    />
                
                <List
                    header={<h3>Todo List</h3>}
                    dataSource={this.todoStore.todos}
                    size="large"
                    renderItem={todo => <TodoItem todo={todo}/>}/>
            </div>
        )
    }
}


export default withAppLayout(observer(Home));