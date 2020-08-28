import React from 'react';
import ContactForm from "../components/forms/contact-form";
import ScrollToTop from "../components/scroll-to-top";
import {useMatomo} from "@datapunt/matomo-tracker-react";
import {TFunction} from "i18next";

type Props = {
    t: TFunction
}

function ContactPage(props: Props) {

    const t = props.t;
    const { trackPageView } = useMatomo();
    const pageTitle = t('contact') + ' - ' + t('site-title');

    document.title = pageTitle;

    React.useEffect(() => {
        trackPageView({documentTitle: pageTitle})
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
