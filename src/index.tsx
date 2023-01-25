import './i18n';
import App from "./app";
import React, {Suspense} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Loader from "./components/loader";
import {createRoot} from 'react-dom/client';
import {createInstance, MatomoProvider} from "@jonkoops/matomo-tracker-react";

const matomo = createInstance({
    urlBase: 'https://analytics.lrk.sh/',
    siteId: 5
});

const root = createRoot(document.getElementById('root')!);
root.render(
    <React.StrictMode>
        <MatomoProvider value={matomo}>
            <Suspense fallback={<Loader/>}>
                <Router>
                    <App/>
                </Router>
            </Suspense>
        </MatomoProvider>
    </React.StrictMode>);
