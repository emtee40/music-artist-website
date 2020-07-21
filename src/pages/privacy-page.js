import React from 'react';
import ScrollToTop from "../components/scroll-to-top";

function PrivacyPage(props) {

    const t = props.t;

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