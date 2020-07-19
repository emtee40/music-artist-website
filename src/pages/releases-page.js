import React from 'react';
import ReleaseLink from "../components/release/release-link";
import ScrollToTop from "../components/scroll-to-top";
import Tracking from "../components/tracking";

function ReleasesPage(props) {

    const t = props.t;
    const paq = props.paq;

    document.title = t('releases') + ' - ' + t('site-title');

    const releases = props.data.releases.map((release, idx) => {
        return (
            <li key={idx}>
                <ReleaseLink t={t} release={release} />
            </li>
        );
    });

    return (
        <div className={'wrapper'}>
            <Tracking paq={paq} />
            <ScrollToTop />
            {props.data.releases && <ul className={'releases'}>{releases}</ul>}
        </div>
    );
}

export default ReleasesPage;