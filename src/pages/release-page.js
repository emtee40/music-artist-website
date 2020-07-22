import React from 'react';
import Release from "../components/release/release";
import ScrollToTop from "../components/scroll-to-top";
import Tracking from "../components/tracking";

function ReleasePage(props) {

    const t = props.t;
    const ean = props.ean;
    const releases = props.data.releases;
    const release = releases.find(rel => rel.ean === ean);

    if (release) document.title = release.title + ' - ' + t('site-title');

    return (
        <div className="wrapper">
            <Tracking/>
            <ScrollToTop/>
            <h1>{release.title}</h1>
            <Release t={t} data={props.data} release={release}/>
        </div>
    );
}

export default ReleasePage;