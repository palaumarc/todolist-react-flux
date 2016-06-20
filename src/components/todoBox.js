import React from 'react'

var TodoBox = React.createClass({

  propTypes: {
    onRemoveClick: React.PropTypes.func.isRequired,
    onToggleClick: React.PropTypes.func.isRequired,
    todo: React.PropTypes.shape({
      isCompleted: React.PropTypes.bool,
      text: React.PropTypes.string
    })
  },

  getToggleButtonStyle: function(isCompleted) {
    return isCompleted ? 'btn btn-sm btn-success' : 'btn btn-sm btn-primary'
  },

  getTaskStyle: function(isCompleted) {
    return isCompleted ? 'alert alert-success' : 'alert alert-info'
  },

  render: function() {

      return (
        <div className = 'list-group'>
          <button
            onClick = {this.props.onRemoveClick}
            className = 'btn btn-sm btn-danger'
            >
            Delete
          </button>

          &nbsp;
          <button
            onClick = {this.props.onToggleClick}
            className = {this.getToggleButtonStyle(this.props.todo.isCompleted)}
            >
              Toggle
          </button>

           &nbsp;
           <div className = {this.getTaskStyle(this.props.todo.isCompleted)}>
             {this.props.todo.text}
           </div>

         </div>
      )
  }
});

export default TodoBox;
