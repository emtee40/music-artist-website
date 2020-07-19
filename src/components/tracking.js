import React from 'react';

function Tracking(props) {

    const paq = props.paq;
    const error = props.error;

    if(paq) {
        paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
        if(error) {
            paq.push(['setCustomVariable', 1, 'Error', error.name, 'page']);
            paq.push(['setCustomVariable', 2, 'Message', error.message, 'page']);
            paq.push(['setCustomVariable', 2, 'Stacktrace', error.stack, 'page']);
        }
        paq.push(['trackPageView']);
    }

    return null; // render nothing
}

export default Tracking;