import * as React from "react";
import ArtistsPage from "./artists-page";
import {useTranslation} from "react-i18next";
import {render} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";

describe('ArtistsPage', () => {
    it('renders without crashing', () => {
        const {t} = useTranslation();
        const container = render(
            <BrowserRouter>
                <ArtistsPage data={{artists: [{name: "test", shortBio: "foo", bio: "bar", socialLinks: {}}], releases: []}} t={t}/>
            </BrowserRouter>
        );

        expect(container.baseElement).toBeInstanceOf(HTMLBodyElement);
    });
});
