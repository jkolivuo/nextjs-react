import React from 'react'
import { Checkbox } from 'antd'
import noop from 'lodash/noop';
import { observer } from 'mobx-react';

class TodoItem extends React.Component {

    render() {
        console.log(this.props.todo);
        return (
            <div className="todoItem">
            <Checkbox
                className={"checkbox"}
                defaultChecked={false}
                checked={this.props.todo.done}
                onClick={this.props.todo.toggleDone}
            />
            <h3 className="title">{this.props.todo.title}</h3>
            </div>
        )
    }
}


export default observer(TodoItem)