import React from 'react';
import ArtistLink from "../components/links/artist-link";
import ScrollToTop from "../components/scroll-to-top";
import Tracking from "../components/tracking";

function ArtistsPage(props) {

    const t = props.t;
    const paq = props.paq;
    const data = props.data;

    document.title = t('artists') + ' - ' + t('site-title');

    return (
        <div className="wrapper">
            <Tracking paq={paq}/>
            <ScrollToTop/>
            <ul className={'artists-list'}>
                {data.artists.map((artist, idx) => <li key={idx}><ArtistLink t={t} artist={artist}/></li>)}
            </ul>
        </div>
    );
}

export default ArtistsPage;