import * as React from "react";
import {render} from "@testing-library/react";
import PrivacyPage from "./privacy-page";
import {useTranslation} from "react-i18next";

describe('PrivacyPage', () => {
    it('renders without crashing', () => {
        const {t} = useTranslation();
        const container = render(
            <PrivacyPage t={t}/>
        );

        expect(container.baseElement).toBeInstanceOf(HTMLBodyElement);
    });
});
