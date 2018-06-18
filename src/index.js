import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import registerServiceWorker from './registerServiceWorker';
import './index.scss';
import reducer from './reducers'
import App from './App';

const store = createStore( reducer, composeWithDevTools( applyMiddleware() ) );

ReactDOM.render(
	<Provider store={ store }>
		<App/>
	</Provider>, document.getElementById( 'root' ) );
registerServiceWorker();
