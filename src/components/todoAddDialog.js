import React from 'react'

var TodoAddDialog = React.createClass({

  propTypes: {
    clickAction: React.PropTypes.func.isRequired
  },

  handleClick: function() {
    this.props.clickAction(this.input.value);
    this.input.value = '';
  },

  render: function() {
    return (
       <div className="form-group">
          <label for="comment">Insert a new task: &nbsp;</label>
          <input type = 'text' ref = { node => this.input = node } className = 'form-inline' />
          &nbsp;
          <button onClick = {this.handleClick} className = 'btn btn-sm btn-default'>
             Add
          </button>
       </div>
    )
  
  }
});

export default TodoAddDialog;