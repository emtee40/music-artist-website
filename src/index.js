import App from "./pages/app";
import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import './i18n';

ReactDOM.render(
    <Suspense fallback={'loading'}>
        <Router>
            <App/>
        </Router>
    </Suspense>, document.getElementById('root'));