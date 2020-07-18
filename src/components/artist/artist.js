import React from 'react';
import {toSlug} from "../../util";

function Artist(props) {

    const artist = props.artist;

    return (
        <div className={'artist'}>
            <img alt={'Artist image for ' + artist.name} src={'/artists/' + toSlug(artist.name) + '.jpeg'} />
            <h2 className={'artist-name'}>{artist.name}</h2>
            <p className={'artist-bio'}>{artist.bio}</p>
        </div>
    );
}

export default Artist;
