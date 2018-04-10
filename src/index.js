import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './Containers/Hello';
import './Styles/styles.scss';
import 'normalize.css';

ReactDOM.render(<Hello />, document.getElementById('app'));

module.hot.accept();