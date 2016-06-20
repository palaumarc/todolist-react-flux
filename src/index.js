import React from 'react';
import {render} from 'react-dom';
import TodoContainer from './components/todoContainer'

class App extends React.Component {

  render () {
    return <TodoContainer />;
  }
}

render(<App/>, document.getElementById('app'));