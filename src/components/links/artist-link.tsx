import React from 'react';
import {Link} from "react-router-dom";
import {toSlug} from "../../util";
import {TFunction} from "i18next";
import {Artist} from "../../types/artist/artist";

type Props = {
    t: TFunction
    artist: Artist
}

function ArtistLink(props: Props) {

    const t = props.t;
    const artist = props.artist;
    const artistSlug = toSlug(artist.name);

    return (
        <div className={'artist-link'}>
            <Link to={'/artist/' + artistSlug}>
                <img src={'/artists/' + artistSlug + '.jpeg'} alt={t('artist-img-desc-pre') + artist.name}/>
                <span className={'artist-name'}>{artist.name}</span>
                <span className={'artist-bio'}>{t('content:' + artist.shortBio)}</span>
            </Link>
        </div>
    );
}

export default ArtistLink;
