import React from 'react'
import todoStore from '../stores/todoStore'
import filterStore, {SHOW_ACTIVE, SHOW_COMPLETED} from '../stores/filterStore'
import { addTodo, removeTodo, toggleTodo } from '../actions/todoActions'
import { setFilter } from '../actions/filterActions'
import TodoAddDialog from './todoAddDialog'
import TodoList from './todoList'
import FilterSelector from './filterSelector'

var todoContainer = React.createClass({
  getInitialState: function(){
    return {
      todos: todoStore.getTodos(),
      filter: filterStore.getActiveFilter()
    }
  },
  componentDidMount: function() {
    this.todoStoreRemoveToken = todoStore.addListener(this.updateTodos);
    this.filterStoreRemoveToken = filterStore.addListener(this.updateFilter);
  },
  componentWillUnmount: function() {
    this.todoStoreRemoveToken.remove();
    this.filterStoreRemoveToken.remove();
  },
  updateTodos: function() {
    this.setState({
      todos: todoStore.getTodos(),
      filter: this.state.filter
    })
  },
  updateFilter: function() {
    this.setState({
      todos: this.state.todos,
      filter: filterStore.getActiveFilter()
    })
  },

  getFilteredTodos: function() {

    let filteredTodos = {};
    switch (this.state.filter) {

      case SHOW_ACTIVE:
        Object.keys(this.state.todos).filter(id => { 
          return !this.state.todos[id].isCompleted; 
        }).forEach( id => {
          filteredTodos[id] = this.state.todos[id]
        })

        return filteredTodos;

      case SHOW_COMPLETED:

        Object.keys(this.state.todos).filter(id => { 
          return this.state.todos[id].isCompleted; 
        }).forEach( id => {
          filteredTodos[id] = this.state.todos[id]
        })

        return filteredTodos;

      default:
        return this.state.todos
    }
  },

  render: function() {
    return (
      <div>
        <TodoAddDialog clickAction={addTodo} />
        <TodoList 
          removeAction={removeTodo} 
          toggleAction={toggleTodo}
          todos={this.getFilteredTodos()} 
        />
        <FilterSelector changeFilter={setFilter} />
      </div>
    )
  }
});

 export default todoContainer;