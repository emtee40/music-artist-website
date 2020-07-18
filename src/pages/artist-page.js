import React from 'react';
import {toSlug} from "../util";
import ReleaseLink from "../components/release/release-link";
import Artist from "../components/artist/artist";

function ArtistPage(props) {

    const data = props.data;
    const slug = props.slug;

    const releases = data.releases.filter(release => release.artists.map(toSlug).includes(slug));
    const artist = data.artists.find(artist => toSlug(artist.name) === slug);

    return (
        artist && <div className={'wrapper'}>
            <Artist artist={artist} />
            <h3>Tracks</h3>
            <ul className={'releases'}>
                {releases && releases.map((release, idx) => {
                    return <li key={idx}><ReleaseLink release={release}/></li>;
                })}
            </ul>
        </div>
    );
}

export default ArtistPage;