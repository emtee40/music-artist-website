import React from 'react';
import ReleaseLink from "../components/release/release-link";

function ReleasesPage(props) {
    const releases = props.data.releases.map((release, idx) => {
        return (
            <li key={idx}>
                <ReleaseLink release={release} />
            </li>
        );
    });

    return (
        <div className={'wrapper'}>
            {props.data.releases && <ul className={'releases'}>{releases}</ul>}
        </div>
    );
}

export default ReleasesPage;