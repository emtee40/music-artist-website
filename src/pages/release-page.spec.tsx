import * as React from "react";
import {render} from "@testing-library/react";
import ReleasePage from "./release-page";
import {useTranslation} from "react-i18next";
import {BrowserRouter} from "react-router-dom";

describe('ReleasePage', () => {
    it('renders without crashing', () => {
        const {t} = useTranslation();
        const container = render(
            <BrowserRouter>
                <ReleasePage ean={"12345"} data={{
                    artists: [], releases: [{
                        title: "test",
                        artists: [],
                        label: "test",
                        explicit: false,
                        copyright: "test",
                        ean: "12345",
                        genres: ["test"],
                        date: "2020-01-31",
                        tracks: [{
                            title: "test",
                            artists: [],
                            copyright: "test",
                            isrc: "test",
                            version: "test",
                            recording: "test"
                        }],
                        links: {}
                    }]
                }} t={t}/>
            </BrowserRouter>
        );

        expect(container.baseElement).toBeInstanceOf(HTMLBodyElement);
    });
});
