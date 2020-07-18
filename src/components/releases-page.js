import React from 'react';
import Release from "./release";

function ReleasesPage(props) {
    console.log('Releases: ');
    console.log(props.data.releases);

    const releases = props.data.releases.map((release, idx) => {
        return <li className={'release'} key={idx}><Release release={release}/></li>;
    });

    return (
        <div>
            <span>{props.data.releases.length} Releases!</span>
            {props.data.releases && <ul id={'releases'}>{releases}</ul>}
        </div>
    );
}

export default ReleasesPage;