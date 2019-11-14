import { Todo } from '../models';
import { types } from 'mobx-state-tree';

const TodoStore = types.
    model("TodoStore", {
        todos: types.array(Todo)
    })
    .views(self => ({
        get todoCount() {
            return self.todos.length
        },
        get completedCount() {
            return self.todos.filter(todo => todo.done)
        }
    }))
    .actions(self => ({
        addTodo(todo) {
            self.todos.push(todo);
        },
        deleteTodo(id) {
            self.todos = self.todos.filter(todo => todo.id !== id);
        }
    }));

export default TodoStore