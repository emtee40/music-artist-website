import React from 'react';
import Tracking from "../components/tracking";
import ContactForm from "../components/forms/contact-form";
import ScrollToTop from "../components/scroll-to-top";


function ContactPage(props) {

    const t = props.t;

    return (
        <div className={'wrapper'}>
            <Tracking />
            <ScrollToTop />
            <h1>{t('contact')}</h1>
            <p className={'contact-text'}>{t('contact-text')}</p>
            <ContactForm t={t} />
        </div>
    );
}

export default ContactPage;