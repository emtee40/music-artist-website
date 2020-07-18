import React from 'react';
import {toSlug} from "../../util";

function ArtistList(props) {

    const artists = props.artists;
    const data = props.data;

    return (
        <ul className={'artist-list'}>
            {artists.map((artist, idx) => {
                const artistSlug = toSlug(artist);
                const knownArtist = data.artists.find(artist => toSlug(artist.name) === artistSlug) !== undefined;
                return (
                    <li key={idx}>
                        <a href={knownArtist ? '/artist/' + artistSlug : '#'}
                           className={knownArtist ? 'known' : 'unknown'}>{artist}</a>
                    </li>
                );
            })}
        </ul>
    );
}

export default ArtistList;