import React from 'react';

function Tracking(props) {

    const paq = window._paq || [];
    const u = "https://analytics.lrk.sh/";
    paq.push(['setTrackerUrl', u + 'matomo.php']);
    paq.push(['setSiteId', '5']);

    const error = props.error;

    paq.push(['deleteCustomVariables', 'page']);
    paq.push(['setCustomUrl', '' + window.location.href]);
    paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
    paq.push(['enableHeartBeatTimer']);
    paq.push(['enableLinkTracking']);
    if (error) {
        paq.push(['setCustomVariable', 1, 'Error', error.name, 'page']);
        paq.push(['setCustomVariable', 2, 'Message', error.message, 'page']);
        paq.push(['setCustomVariable', 2, 'Stacktrace', error.stack, 'page']);
    }
    paq.push(['trackPageView']);
    return (<script type={'text/javascript'} async={true} defer={true} src={u + 'matomo.js'} />);

    return null; // render nothing
}

export default Tracking;