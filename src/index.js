import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RouteApp from './router/Router';
import 'semantic-ui-css/semantic.css';
import 'assets/style/reset.scss';


ReactDOM.render(<RouteApp />, document.getElementById('root'));

if(module.hot){
    module.hot.accept();
}

