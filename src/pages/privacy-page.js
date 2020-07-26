import React from 'react';
import ScrollToTop from "../components/scroll-to-top";
import {useMatomo} from "@datapunt/matomo-tracker-react";

function PrivacyPage(props) {

    const t = props.t;
    const { trackPageView, trackEvent } = useMatomo();

    document.title = t('privacy') + ' - ' + t('site-title');

    React.useEffect(() => {
        trackPageView()
    }, []);

    return (
        <div className={'wrapper'}>
            <ScrollToTop/>
            <h1>{t('privacy')}</h1>
            <p>{t('content:privacy-paragraph-1')}</p>
            <p>{t('content:privacy-paragraph-2')}</p>
            <p>{t('content:privacy-paragraph-3')}</p>
        </div>
    );
}

export default PrivacyPage;