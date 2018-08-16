import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import CssBaseline from '@material-ui/core/CssBaseline';

ReactDOM.render(<Provider store={store}><CssBaseline><App></App>/</CssBaseline></Provider>,             document.getElementById('root'));

registerServiceWorker();
