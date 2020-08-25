import React from 'react';
import {toSlug} from "../../util";
import {TFunction} from "i18next";
import {Data} from "../../types/data";

type Props = {
    t: TFunction
    artists: Array<string>
    data: Data
}

function ArtistList(props: Props) {

    const t = props.t;
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
