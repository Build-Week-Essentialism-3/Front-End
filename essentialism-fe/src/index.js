import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {mainReducer} from './store/reducer';


import 'bootstrap/dist/css/bootstrap.min.css';





const store = createStore(mainReducer,applyMiddleware(thunk,logger));


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));



