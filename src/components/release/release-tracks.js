import React from 'react';
import ArtistList from "../artist/artist-list";

function ReleaseTracks(props) {

    const t = props.t;
    const release = props.release;

    return (
        release && <div className="release-tracks-wrapper">
            <h2>{t('tracks')}</h2>
            <ol className={'release-tracks'}>
                {release.tracks.map((track, idx) => {
                    return (
                        <li key={idx} className={'release-track'}>
                            <dl className={'track-meta'}>
                                <dt>{t('title')}</dt>
                                <dd>{track.title}&nbsp;({track.version})</dd>
                                <dt>{t('artists')}</dt>
                                <dd><ArtistList data={props.data} artists={release.artists}/></dd>
                                <dt>{t('isrc')}</dt>
                                <dd>{track.isrc}</dd>
                                <dt>{t('copyright')}</dt>
                                <dd>&copy;&nbsp;{track.copyright}</dd>
                                <dt>{t('sound-recording')}</dt>
                                <dd>{'\u2117'}&nbsp;{track.recording}</dd>
                            </dl>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}

export default ReleaseTracks;