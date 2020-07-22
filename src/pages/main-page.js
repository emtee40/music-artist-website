import React from 'react';
import Tracking from "../components/tracking";
import ScrollToTop from "../components/scroll-to-top";

function MainPage(props) {

    const t = props.t;

    return (
        <div className="wrapper">
            <Tracking/>
            <ScrollToTop/>
            <p>{t('welcome-text')}</p>
            {/* TODO: add widget for latest releases and artists */}

        </div>
    );
}

export default MainPage;