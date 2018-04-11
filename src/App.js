import React, { Component } from 'react';
import MenuActions from './components/menu-actions/MenuActions';
import MenuActionsData from './data/MenuActionsData';
import Notes from './components/notes/Notes';
import './App.css';
class App extends Component {

  constructor ( props ) {
    super ( props );
    this.state = {
      menuData: MenuActionsData,
    };
  };

  render () {
    const { menuData } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">To Do List</h1>
        </header>
        <MenuActions menuData={menuData}/>
        <Notes/>
      </div>
    )
      ;
  }
}

export default App;
