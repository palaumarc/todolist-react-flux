import React from 'react'
import TodoBox from './todoBox'

var TodoList = React.createClass({

  propTypes: {
    removeAction: React.PropTypes.func.isRequired,
    toggleAction: React.PropTypes.func.isRequired,
    todos: React.PropTypes.object.isRequired
  },

  render: function(){
    var listItems = Object.keys(this.props.todos).map((todoId, index) => (
          <div key={todoId}>
            <TodoBox 
              todo={this.props.todos[todoId]}
              onRemoveClick={this.props.removeAction.bind(null, todoId)}
              onToggleClick={this.props.toggleAction.bind(null, todoId)}
            />
          </div>
        )
    );
    
    return (
      <ul>
        {listItems}
      </ul>
    )
  }
});

export default TodoList;
