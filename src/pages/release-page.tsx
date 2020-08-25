import React from 'react';
import ReleaseComponent from "../components/release/release";
import {Release} from "../types/release/release"
import ScrollToTop from "../components/scroll-to-top";
import {useMatomo} from "@datapunt/matomo-tracker-react";
import {TFunction} from "i18next";
import {Data} from "../types/data";

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

    const release = releases.find((rel: Release) => rel.ean === ean);
    const {trackPageView, trackEvent} = useMatomo();

    if (!release) {
        return null;
    }

    const pageTitle = release.title + ' - ' + t('site-title');
    document.title = pageTitle;

    React.useEffect(() => {
        trackPageView({documentTitle: pageTitle})
    }, []);

    return (
        <div className="wrapper">
            <ScrollToTop/>
            <h1>{release.title}</h1>
            <ReleaseComponent t={t} data={props.data} release={release}/>
        </div>
    );
}

export default ReleasePage;
