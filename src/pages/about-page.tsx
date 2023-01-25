import React from 'react';
import { useMatomo } from '@jonkoops/matomo-tracker-react'
import ScrollToTop from "../components/scroll-to-top";
import {TFunction} from "i18next";

type Props = {
    t: TFunction
}

function AboutPage(props: Props) {

    const t = props.t;
    const { trackPageView } = useMatomo();
    const pageTitle = t('about') + ' - ' + t('site-title')

    document.title = pageTitle;

    React.useEffect(() => {
        trackPageView({documentTitle: pageTitle})
    }, []);

    return (
        <div className={'wrapper'}>
            <ScrollToTop/>
            <h1><>{t('about')}</></h1>
            <p className={'about-text'}><>{t('content:about')}</></p>
        </div>
    );
}

export default AboutPage;
