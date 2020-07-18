import React from 'react';
import Release from "./release";

function ReleasePage(props) {
    const ean = props.ean;
    const releases = props.releases;
    const release = releases.find(rel => rel.ean === ean);

    console.log(ean);
    console.log(release);

    return (
        <div className="wrapper">
            <Release release={release} />
        </div>
    );
}

export default ReleasePage;