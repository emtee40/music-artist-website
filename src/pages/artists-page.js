import React from 'react';
import ArtistLink from "../components/artist/artist-link";
import ScrollToTop from "../components/scroll-to-top";

function ArtistsPage(props) {

    const data = props.data;

    return (
        <div className="wrapper">
            <ScrollToTop />
            <ul className={'artists-list'}>
                {data.artists.map((artist, idx) => <li key={idx}><ArtistLink artist={artist} /></li>)}
            </ul>
        </div>
    );
}

export default ArtistsPage;