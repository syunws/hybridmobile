import React, { Component } from 'react';
import ToDoManager from './Component/ToDoManager';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <ToDoManager />
        </header>
      </div>
    );
  }
}

export default App;
