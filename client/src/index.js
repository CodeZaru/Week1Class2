//import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import routes from './config/routes';
import './jumbo.jpg';

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
