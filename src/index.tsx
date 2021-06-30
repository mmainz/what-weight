import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
}

const div = document.createElement('div');
const body = document.getElementsByTagName('body')[0];
body.append(div);

ReactDOM.render(<App />, div);
