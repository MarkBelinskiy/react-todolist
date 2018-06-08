import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers'

const store = createStore( reducer, composeWithDevTools( applyMiddleware() ) );

ReactDOM.render(
	<Provider store={ store }>
		<App/>
	</Provider>, document.getElementById( 'root' ) );
registerServiceWorker();
