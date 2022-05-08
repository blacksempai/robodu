import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {subscribe, dispatch} from './state'

const renderEntireTree = () => {
    ReactDOM.render(<App state={state} dispatch={dispatch}/>,  document.getElementById('root'));
}

renderEntireTree();
subscribe(renderEntireTree);