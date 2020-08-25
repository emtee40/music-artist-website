import React from 'react';
import ScrollToTop from "../components/scroll-to-top";
import {useMatomo} from "@datapunt/matomo-tracker-react";
import {TFunction} from "i18next";

type Props = {
    t: TFunction
}

function PrivacyPage(props: Props) {

    const t = props.t;
    const { trackPageView, trackEvent } = useMatomo();

    const pageTitle = t('privacy') + ' - ' + t('site-title');

    document.title = pageTitle;

    React.useEffect(() => {
        trackPageView({documentTitle: pageTitle})
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