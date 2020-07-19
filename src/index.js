import App from "./pages/app";
import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import './i18n';

const _paq = window._paq || [];
_paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
_paq.push(["setCookieDomain", "*.kratzen-und-fauchen.com"]);
_paq.push(['trackPageView']);
_paq.push(['enableHeartBeatTimer']);
_paq.push(['enableLinkTracking']);
(function () {
    const u = "https://analytics.lrk.sh/";
    _paq.push(['setTrackerUrl', u + 'matomo.php']);
    _paq.push(['setSiteId', '5']);
    const d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
    g.type = 'text/javascript';
    g.async = true;
    g.defer = true;
    g.src = u + 'matomo.js';
    s.parentNode.insertBefore(g, s);
})();

ReactDOM.render(
    <Suspense fallback={'loading'}>
        <Router>
            <App paq={_paq}/>
        </Router>
    </Suspense>, document.getElementById('root'));