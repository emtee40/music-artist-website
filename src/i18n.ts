import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import {getRandomInt} from "./util";

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        ns: ['common', 'aria', 'form', 'content'],
        defaultNS: 'common',
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json?' + getRandomInt(1000, 9999),
        },
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        }
    }).then(() => {});


// noinspection JSUnusedGlobalSymbols
export default i18n;
