import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './Containers/Hello';
import '../css/style.css';
import 'normalize.css';

//This should be your Render file. The name index.js is just a placeholder. 

ReactDOM.render(<Hello />, document.getElementById('app'));

module.hot.accept();