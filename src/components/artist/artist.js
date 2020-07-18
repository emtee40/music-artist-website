import React from 'react';
import {toSlug} from "../../util";

function Artist(props) {

    const t = props.t;
    const artist = props.artist;

    return (
        <div className={'artist'}>
            <img alt={t('artist-img-desc-pre') + artist.name} src={'/artists/' + toSlug(artist.name) + '.jpeg'} />
            <h2 className={'artist-name'}>{artist.name}</h2>
            <p className={'artist-bio'}>{artist.bio}</p>{/* TODO: implement i18n for artist bio */}
        </div>
    );
}

export default Artist;
