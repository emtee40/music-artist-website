import React from 'react';
import {toSlug} from "../util";
import Artist from "../components/artist/artist";
import ScrollToTop from "../components/scroll-to-top";
import Tracking from "../components/tracking";
import ReleaseList from "../components/release/release-list";
import SocialLinks from "../components/artist/social-links";

function ArtistPage(props) {

    const t = props.t;
    const data = props.data;
    const slug = props.slug;

    const releases = data.releases.filter(release => release.artists.map(toSlug).includes(slug));
    const artist = data.artists.find(artist => toSlug(artist.name) === slug);

    if (artist) document.title = artist.name + ' - ' + t('site-title');

    return (
        artist && <div className={'wrapper'}>
            <Tracking/>
            <ScrollToTop/>
            <Artist t={t} artist={artist}/>
            <SocialLinks t={t} artist={artist} />
            <h3>{t('releases-by') + artist.name}</h3>
            <ReleaseList t={t} releases={releases}/>
        </div>
    );
}

export default ArtistPage;