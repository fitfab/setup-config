import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const user = {
    firstName: 'Miguel',
    lastName: 'Julio',
    userName: 'fitfab',
    password: 'one2one'
};

ReactDOM.render(<App props={user} />, document.getElementById('root'));
registerServiceWorker();
