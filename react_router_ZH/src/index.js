import React from 'react';
import ReactDOM from 'react-dom';
import "./common/fonts(1)/iconfont.css";
import Route from "./router/route";
import {BrowserRouter as Router} from "react-router-dom";
import config from "./router/router.config";
ReactDOM.render( <Router>
    <Route routes={config.routes}></Route>
</Router>, document.getElementById('root'));