import React from 'react';
import {Link} from "react-router-dom";
import Cover from "./release/cover";

function ReleasesPage(props) {
    console.log('Releases: ');
    console.log(props.data.releases);

    const releases = props.data.releases.map((release, idx) => {
        return (
            <li className={'release'} key={idx}>
                <Link to={'/release/' + release.ean}>
                    <Cover release={release} />
                    <span className={'release-title'}>{release.artists.join(', ')} - {release.title}</span>
                </Link>
            </li>
        );
    });

    return (
        <div>
            <span>{props.data.releases.length} Releases!</span>
            {props.data.releases && <ul id={'releases'}>{releases}</ul>}
        </div>
    );
}

export default ReleasesPage;