import('./bootstrap');
export default true;

// 如果 shared 裡的 module eager 都開 ture 的話 就不需要 import('./bootstrap')
/*
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
// */
