import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addPost, subscribe, addLike} from './state'

const renderEntireTree = () => {
    ReactDOM.render(<App state={state} addPost={addPost} addLike={addLike}/>,  document.getElementById('root'));
}

renderEntireTree();
subscribe(renderEntireTree);