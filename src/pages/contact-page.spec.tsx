import * as React from "react";
import ContactPage from "./contact-page";
import {useTranslation} from "react-i18next";
import {render} from "@testing-library/react";

describe('ContactPage', () => {
    it('renders without crashing', () => {
        const {t} = useTranslation();
        const container = render(
            <ContactPage t={t}/>
        );

        expect(container.baseElement).toBeInstanceOf(HTMLBodyElement);
    });
});
