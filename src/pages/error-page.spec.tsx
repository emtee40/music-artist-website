import * as React from "react";
import ErrorPage from "./error-page";
import {useTranslation} from "react-i18next";
import {render} from "@testing-library/react";

describe('ErrorPage', () => {
    it('renders without crashing', () => {
        const {t} = useTranslation();
        const container = render(
            <ErrorPage t={t}/>
        );

        expect(container.baseElement).toBeInstanceOf(HTMLBodyElement);
    });
});
