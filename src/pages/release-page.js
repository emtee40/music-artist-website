import React from 'react';
import Release from "../components/release/release";

function ReleasePage(props) {
    const ean = props.ean;
    const releases = props.data.releases;
    const release = releases.find(rel => rel.ean === ean);

    return (
        <div className="wrapper">
            <Release data={props.data} release={release} />
        </div>
    );
}

export default ReleasePage;