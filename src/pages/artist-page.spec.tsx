import * as React from "react";
import ArtistPage from "./artist-page";
import {useTranslation} from "react-i18next";
import {render} from "@testing-library/react";

describe('ArtistPage', () => {
    it('renders without crashing', () => {
        const {t} = useTranslation();
        const container = render(
            <ArtistPage slug={'test'} data={{artists: [{name: "test", shortBio: "foo", bio: "bar", socialLinks: {}}], releases: []}} t={t}/>
        );

        expect(container.baseElement).toBeInstanceOf(HTMLBodyElement);
    });
});
