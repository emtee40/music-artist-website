import React from 'react';
import ScrollToTop from "../components/scroll-to-top";
import {useMatomo} from "@datapunt/matomo-tracker-react";

function MainPage(props) {

    const t = props.t;
    const { trackPageView, trackEvent } = useMatomo();

    document.title = t('home') + ' - ' + t('site-title');

    React.useEffect(() => {
        trackPageView()
    }, []);

    return (
        <div className="wrapper">
            <ScrollToTop/>
            <p>{t('welcome-text')}</p>
            {/* TODO: add widget for latest releases and artists */}

        </div>
    );
}

export default MainPage;