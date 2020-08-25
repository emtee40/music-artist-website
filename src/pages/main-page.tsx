import React from 'react';
import ScrollToTop from "../components/scroll-to-top";
import {useMatomo} from "@datapunt/matomo-tracker-react";
import {TFunction} from "i18next";

type Props = {
    t: TFunction
}

function MainPage(props: Props) {

    const t = props.t;
    const { trackPageView, trackEvent } = useMatomo();

    const pageTitle = t('home') + ' - ' + t('site-title')

    document.title = pageTitle;

    React.useEffect(() => {
        trackPageView({documentTitle: pageTitle})
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