import React from 'react';
import {Link} from "react-router-dom";
import {toSlug} from "../../util";

function ArtistLink(props) {

    const artist = props.artist;
    const artistSlug = toSlug(artist.name);

    return (
        <div className={'artist-link'}>
            <Link to={'/artist/' + artistSlug}>
                <img src={'/artists/' + artistSlug + '.jpeg'} alt={'Artist image for ' + artist.name} />
                <span className={'artist-name'}>{artist.name}</span>
                <span className={'artist-bio'}>{artist.shortBio}</span>
            </Link>
        </div>
    );
}

export default ArtistLink;
