import { types } from 'mobx-state-tree';


const Todo = types.model(
    "Todo", {
        id: types.number,
        title: "",
        done: false
    })
    .actions(self => ({
        toggleDone() {
            console.log('toggle');
            self.done = !self.done
        }
    }));

export default Todo