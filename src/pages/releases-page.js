import React from 'react';
import ScrollToTop from "../components/scroll-to-top";
import Tracking from "../components/tracking";
import ReleaseList from "../components/release/release-list";

function ReleasesPage(props) {

    const t = props.t;
    const paq = props.paq;

    document.title = t('releases') + ' - ' + t('site-title');

    return (
        <div className={'wrapper'}>
            <Tracking paq={paq}/>
            <ScrollToTop/>
            <h1>{t('all_releases')}</h1>
            <ReleaseList t={t} releases={props.data.releases}/>
        </div>
    );
}

export default ReleasesPage;