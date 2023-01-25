import * as React from "react";
import AboutPage from "./about-page";
import {useTranslation} from "react-i18next";
import {render} from "@testing-library/react";

describe('AboutPage', () => {
    it('renders without crashing', () => {
        const {t} = useTranslation();
        const container = render(
            <AboutPage t={t}/>
        );

        expect(container.baseElement).toBeInstanceOf(HTMLBodyElement);
    });
});
