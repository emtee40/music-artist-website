import App from "./app";
import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import { MatomoProvider, createInstance } from '@datapunt/matomo-tracker-react'
import './i18n';

const matomo = createInstance({
    urlBase: 'https://analytics.lrk.sh/',
    enableLinkTracking: false,
    siteId: 5
})

ReactDOM.render(
    <MatomoProvider value={matomo}>
        <Suspense fallback={'loading'}>
            <Router>
                <App/>
            </Router>
        </Suspense>
    </MatomoProvider>, document.getElementById('root'));