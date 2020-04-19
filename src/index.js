import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';
import * as serviceWorker from './serviceWorker';
import 'typeface-roboto';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
