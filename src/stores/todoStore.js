import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions/todoActions';
import { AppDispatcher } from '../dispatcher/appDispatcher';
import { Store } from 'flux/utils';

class TodoStore extends Store {

  constructor(dispatcher) {
    super(dispatcher);
    this.todos = {};
  }

  getTodos() {
    return this.todos;
  }

  addTodo(id, text) {
    this.todos[id] = {
      text: text,
      isCompleted: false
    };
  }

  removeTodo(id) {
    delete this.todos[id];
  }

  toggleTodo(id) {
    this.todos[id].isCompleted = !this.todos[id].isCompleted; 
  }

  __onDispatch (action) {
    switch(action.type) {

      case ADD_TODO:
        this.addTodo(action.id, action.text);
        this.__emitChange();
        break;

      case REMOVE_TODO:
        this.removeTodo(action.id);
        this.__emitChange();
        break;

      case TOGGLE_TODO:
        this.toggleTodo(action.id);
        this.__emitChange();
        break;
    }
  }
}

const instance = new TodoStore(AppDispatcher);
export default instance;