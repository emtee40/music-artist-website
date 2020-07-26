import React from 'react';
import { useMatomo } from '@datapunt/matomo-tracker-react'
import ScrollToTop from "../components/scroll-to-top";

function AboutPage(props) {

    const t = props.t;
    const { trackPageView, trackEvent } = useMatomo();

    React.useEffect(() => {
        trackPageView()
    }, []);

    return (
        <div className={'wrapper'}>
            <ScrollToTop/>
            <h1>{t('about')}</h1>
            <p className={'about-text'}>{t('content:about')}</p>
        </div>
    );
}

export default AboutPage;