import React from 'react';
import ScrollToTop from "../components/scroll-to-top";
import Tracking from "../components/tracking";
import ReleaseList from "../components/release/release-list";

function ReleasesPage(props) {

    const t = props.t;

    document.title = t('releases') + ' - ' + t('site-title');

    return (
        <div className={'wrapper'}>
            <Tracking />
            <ScrollToTop/>
            <h1>{t('all-releases')}</h1>
            <ReleaseList t={t} releases={props.data.releases}/>
        </div>
    );
}

export default ReleasesPage;