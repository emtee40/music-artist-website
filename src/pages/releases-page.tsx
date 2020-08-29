import React from 'react';
import ScrollToTop from "../components/scroll-to-top";
import ReleaseList from "../components/release/release-list";
import {useMatomo} from "@datapunt/matomo-tracker-react";
import {TFunction} from "i18next";
import {Data} from "../types/data";

type Props = {
    t: TFunction,
    data: Data,
}

function ReleasesPage(props: Props) {

    const t = props.t;
    const { trackPageView } = useMatomo()
    const pageTitle = t('releases') + ' - ' + t('site-title');

    document.title = pageTitle;

    React.useEffect(() => {
        trackPageView({documentTitle: pageTitle})
    }, []);

    return (
        <div className={'wrapper'}>
            <ScrollToTop/>
            <ReleaseList t={t} releases={props.data.releases}/>
        </div>
    );
}

export default ReleasesPage;
