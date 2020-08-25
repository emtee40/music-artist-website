import React from 'react';
import {Link} from "react-router-dom";
import Cover from "../release/cover";
import {TFunction} from "i18next";
import {Release} from "../../types/release/release";

type Props = {
    t: TFunction
    release: Release
}

function ReleaseLink(props: Props) {

    const t = props.t;
    const release = props.release;

    return (
        <div className={'release-link'}>
            <Link to={'/release/' + release.ean}>
                <Cover t={t} release={release}/>
                <span className={'release-title'}>{release.artists.join(', ')} - {release.title}</span>
            </Link>
        </div>
    );
}

export default ReleaseLink;
