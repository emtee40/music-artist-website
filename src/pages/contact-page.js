import React from 'react';
import ContactForm from "../components/forms/contact-form";
import ScrollToTop from "../components/scroll-to-top";
import {useMatomo} from "@datapunt/matomo-tracker-react";


function ContactPage(props) {

    const t = props.t;
    const { trackPageView, trackEvent } = useMatomo();

    document.title = t('contact') + ' - ' + t('site-title');

    React.useEffect(() => {
        trackPageView()
    }, []);

    return (
        <div className={'wrapper'}>
            <ScrollToTop/>
            <h1>{t('contact')}</h1>
            <p className={'contact-text'}>{t('contact-text')}</p>
            <ContactForm t={t}/>
        </div>
    );
}

export default ContactPage;