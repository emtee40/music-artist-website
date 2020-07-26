import React from 'react';
import Release from "../components/release/release";
import ScrollToTop from "../components/scroll-to-top";
import {useMatomo} from "@datapunt/matomo-tracker-react";

function ReleasePage(props) {

    const t = props.t;
    const ean = props.ean;
    const releases = props.data.releases;
    const release = releases.find(rel => rel.ean === ean);
    const { trackPageView, trackEvent } = useMatomo();


    if (release) document.title = release.title + ' - ' + t('site-title');

    React.useEffect(() => {
        trackPageView()
    }, []);

    return (
        <div className="wrapper">
            <ScrollToTop/>
            <h1>{release.title}</h1>
            <Release t={t} data={props.data} release={release}/>
        </div>
    );
}

export default ReleasePage;