import React from 'react';
import ArtistLink from "../components/links/artist-link";
import ScrollToTop from "../components/scroll-to-top";
import {useMatomo} from "@jonkoops/matomo-tracker-react";
import {TFunction} from "i18next";
import {Data} from "../types/data";
import {Artist} from "../types/artist/artist";

type Props = {
    t: TFunction
    data: Data
}

function ArtistsPage(props: Props) {
    const t = props.t;
    const data = props.data;
    const { trackPageView } = useMatomo();
    const pageTitle = t('artists') + ' - ' + t('site-title');

    document.title = pageTitle;

    React.useEffect(() => {
        trackPageView({documentTitle: pageTitle})
    }, []);

    if(!data.artists) {
        return null;
    }

    return (
        <div className="wrapper">
            <ScrollToTop/>
            <h1><>{t('artists')}</></h1>
            <ul className={'artists-list'}>
                {data.artists.map((artist: Artist, idx: number) => <li key={idx}><ArtistLink t={t} artist={artist}/></li>)}
            </ul>
        </div>
    );
}

export default ArtistsPage;
