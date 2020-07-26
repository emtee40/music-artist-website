import React from 'react';
import ScrollToTop from "../components/scroll-to-top";
import ReleaseList from "../components/release/release-list";
import {useMatomo} from "@datapunt/matomo-tracker-react";

function ReleasesPage(props) {

    const t = props.t;
    const { trackPageView, trackEvent } = useMatomo()

    document.title = t('releases') + ' - ' + t('site-title');

    React.useEffect(() => {
        trackPageView()
    }, []);

    return (
        <div className={'wrapper'}>
            <ScrollToTop/>
            <h1>{t('all-releases')}</h1>
            <ReleaseList t={t} releases={props.data.releases}/>
        </div>
    );
}

export default ReleasesPage;