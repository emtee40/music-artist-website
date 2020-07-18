import React from 'react';
import {Link} from "react-router-dom";
import Cover from "./cover";

function ReleaseLink(props) {

    const release = props.release;

    return (
        <div className={'release-link'}>
            <Link to={'/release/' + release.ean}>
                <Cover release={release}/>
                <span className={'release-title'}>{release.artists.join(', ')} - {release.title}</span>
            </Link>
        </div>
    );
}

export default ReleaseLink;
