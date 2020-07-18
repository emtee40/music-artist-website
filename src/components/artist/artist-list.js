import React from 'react';
import {toSlug} from "../../util";

function ArtistList(props) {

    const artists = props.artists;

    return (
        <ul className={'artist-list'}>
            {artists.map((artist, idx) => {
                return (
                    <li key={idx}>
                        <a href={'/artist/' + toSlug(artist)}>{artist}</a>
                    </li>
                );
            })}
        </ul>
    );
}

export default ArtistList;