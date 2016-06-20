import React from 'react'
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../stores/filterStore'

var FilterSelector = React.createClass({

  createFilterButton: function(filter, style, text) {
    return (
      <button
        onClick = { this.props.changeFilter.bind(null,filter) }
        className = {style}
      >
        {text}
      </button>
    )
  },

  render: function() {

    var divStyle = {
      margin: 5,
      padding: 5
    };

    
    return (
       <div style={divStyle} className="form-group">
          &nbsp;
          {this.createFilterButton(SHOW_ALL, 'btn btn-sm btn-default', 'Show all')}
          &nbsp;
          {this.createFilterButton(SHOW_ACTIVE, 'btn btn-sm btn-default', 'Show active')}
          &nbsp;
          {this.createFilterButton(SHOW_COMPLETED, 'btn btn-sm btn-default', 'Show completed')}
       </div>
    )
  }
});

export default FilterSelector;