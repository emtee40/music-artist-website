import App from "./pages/app";
import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import ReactPiwik from 'react-piwik';
import {createBrowserHistory} from "history";
import './i18n';

const customHistory = createBrowserHistory();
const matomo = new ReactPiwik({
    url: 'analytics.lrk.sh',
    siteId: 5,
    trackErrors: true,
    jsFilename: 'matomo.js',
    phpFilename: 'matomo.php'
});

//TODO: implement i18n for artist bio

ReactPiwik.push(['trackPageView']);
ReactDOM.render(
    <Suspense fallback={'loading'}>
        <Router history={matomo.connectToHistory(customHistory)}>{/*TODO: find a way to use this thing with BrowserRouter...*/}
            <App/>
        </Router>
    </Suspense>, document.getElementById('root'));
