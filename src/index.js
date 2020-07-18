import App from "./pages/app";
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import ReactPiwik from 'react-piwik';
import {createBrowserHistory} from "history";

const customHistory = createBrowserHistory();
const matomo = new ReactPiwik({
    url: 'analytics.lrk.sh',
    siteId: 5,
    trackErrors: true,
    jsFilename: 'matomo.js',
    phpFilename: 'matomo.php'
});

ReactPiwik.push(['trackPageView']);
ReactDOM.render(
    <Router history={matomo.connectToHistory(customHistory)}>{/*TODO: find a way to use this thing with BrowserRouter...*/}
        <App/>
    </Router>, document.getElementById('root'));
