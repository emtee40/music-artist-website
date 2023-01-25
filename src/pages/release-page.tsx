import React from 'react';
import ReleaseComponent from "../components/release/release";
import {Release as TRelease} from "../types/release/release"
import ScrollToTop from "../components/scroll-to-top";
import {TFunction} from "i18next";
import {Data} from "../types/data";
import {useMatomo} from "@jonkoops/matomo-tracker-react";

type Props = {
    t: TFunction,
    ean: string | undefined
    data: Data
}

function ReleasePage(props: Props) {

    const t = props.t;
    const ean = props.ean;
    const releases = props.data.releases;

    if(!releases) {
        return null;
    }

    const release = releases.find((rel: TRelease) => rel.ean === ean);
    const {trackPageView} = useMatomo();

    if (!release) {
        return null;
    }

    const pageTitle = release.title + ' - ' + t('site-title');
    document.title = pageTitle;

    React.useEffect(() => {
        trackPageView({documentTitle: pageTitle})
    }, []);

    return (
        <div className="release wrapper">
            <ScrollToTop/>
            <h1>{release.title}</h1>
            <ReleaseComponent t={t} data={props.data} release={release}/>
        </div>
    );
}

export default ReleasePage;
