import React from 'react';
import Tracking from "../components/tracking";
import ScrollToTop from "../components/scroll-to-top";

function AboutPage(props) {

    const t = props.t;

    return (
        <div className={'wrapper'}>
            <Tracking paq={props.paq}/>
            <ScrollToTop/>
            <h1>{t('about')}</h1>
            <p className={'about-text'}>{t('content:about')}</p>
        </div>
    );
}

export default AboutPage;