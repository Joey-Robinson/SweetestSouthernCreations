import React from 'react';
import ReactDOM from 'react-dom';
import SSC from './containers/SSC';
import './Styles/styles.scss';
import 'normalize.css';

ReactDOM.render(<SSC />, document.getElementById('app'));

module.hot.accept();