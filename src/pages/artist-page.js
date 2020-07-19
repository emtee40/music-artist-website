import React from 'react';
import {toSlug} from "../util";
import ReleaseLink from "../components/release/release-link";
import Artist from "../components/artist/artist";
import ScrollToTop from "../components/scroll-to-top";
import Tracking from "../components/tracking";

function ArtistPage(props) {

    const t = props.t;
    const paq = props.paq;
    const data = props.data;
    const slug = props.slug;

    const releases = data.releases.filter(release => release.artists.map(toSlug).includes(slug));
    const artist = data.artists.find(artist => toSlug(artist.name) === slug);

    if(artist) document.title = artist.name + ' - ' + t('site-title');

    return (
        artist && <div className={'wrapper'}>
            <Tracking paq={paq} />
            <ScrollToTop />
            <Artist t={t} artist={artist} />
            <h3>{t('tracks')}</h3>
            <ul className={'releases'}>
                {releases && releases.map((release, idx) => {
                    return <li key={idx}><ReleaseLink t={t} release={release}/></li>;
                })}
            </ul>
        </div>
    );
}

export default ArtistPage;