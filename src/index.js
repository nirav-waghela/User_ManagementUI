import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import axios from 'axios'
import App from './App';
import reducer from './store/reducers/index'
import 'bootstrap/dist/css/bootstrap.min.css';
import {configureStore} from './store/createStore'

const store = configureStore(axios, {}, reducer)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

