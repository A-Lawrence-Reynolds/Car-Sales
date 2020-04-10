import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {provider} from 'react-redux';
import 'bulma/css/bulma.css';
import './styles.scss';
import { createStore } from "redux";

const store = createStore(reducer)

const rootElement = document.getElementById('root');
ReactDOM.render(
<provider store={store}>
  <App />  
</provider>
, rootElement);
