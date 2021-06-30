import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';

const div = document.createElement('div');
const body = document.getElementsByTagName('body')[0];
body.append(div);

ReactDOM.render(<App />, div);
