import React from 'react';
import ReactDOM from 'react-dom';

import('./components/App').then(({ default: App }) => {
  ReactDOM.render(<App />, document.getElementById('root'));
});

// import App from './components/App';
//
