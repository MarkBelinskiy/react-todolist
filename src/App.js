import React, { Component } from 'react';
import MenuActions from './containers/Menu';
import Notes from './containers/Notes';
import './App.css';

class App extends Component {

	render() {

		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">To Do List</h1>
				</header>
				<MenuActions/>
				<Notes/>
			</div>
		);
	}
}

export default App;
