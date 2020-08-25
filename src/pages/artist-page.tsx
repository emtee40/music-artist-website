import React from 'react';
import {toSlug} from "../util";
import Artist from "../components/artist/artist";
import ScrollToTop from "../components/scroll-to-top";
import ReleaseList from "../components/release/release-list";
import SocialLinks from "../components/artist/social-links";
import {useMatomo} from "@datapunt/matomo-tracker-react";
import {TFunction} from "i18next";
import {Data} from "../types/data";

type Props = {
    t: TFunction
    data: Data
    slug: string
}

function ArtistPage(props: Props) {

    const t = props.t;
    const data = props.data;
    const slug = props.slug;
    const {trackPageView, trackEvent} = useMatomo()

    if (!data.releases || !data.artists) {
        return null;
    }

    const releases = data.releases.filter(release => release.artists && release.artists.map(toSlug).includes(slug));
    const artist = data.artists.find(artist => toSlug(artist.name) === slug);

    if (!artist) {
        return null;
    }

    const pageTitle = artist.name + ' - ' + t('site-title')

    document.title = pageTitle;

    React.useEffect(() => {
        trackPageView({documentTitle: pageTitle})
    }, []);

    return (
        artist && <div className={'wrapper'}>
            <ScrollToTop/>
            <Artist t={t} artist={artist}/>
            <SocialLinks t={t} artist={artist}/>
            <h3>{t('releases-by') + artist.name}</h3>
            <ReleaseList t={t} releases={releases}/>
        </div>
    );
}

export default ArtistPage;