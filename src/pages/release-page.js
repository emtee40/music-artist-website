import React from 'react';
import Release from "../components/release/release";
import ScrollToTop from "../components/scroll-to-top";

function ReleasePage(props) {

    const t = props.t;
    const ean = props.ean;
    const releases = props.data.releases;
    const release = releases.find(rel => rel.ean === ean);

    return (
        <div className="wrapper">
            <ScrollToTop />
            <Release t={t} data={props.data} release={release} />
        </div>
    );
}

export default ReleasePage;