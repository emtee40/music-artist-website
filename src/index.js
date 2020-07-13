import App from "./components/app";
import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

ReactDOM.render(
    <Router>
        <App/>
    </Router>, document.getElementById('root'));
