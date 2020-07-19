import React from 'react';
import {formatDistanceToNow, parse} from "date-fns";
import Cover from "./cover";
import ArtistList from "../artist/artist-list";

function Release(props) {

    const t = props.t;
    const parsedDate = parse(props.release.date, 'yyyy-MM-dd', new Date());
    const releaseDistanceString = formatDistanceToNow(parsedDate, {addSuffix: true});

    return (props.release && (
            <div className={'release'}>
                <Cover link={true} t={t} release={props.release}/>
                <div className="release-data">
                    <div className="release-meta-wrapper">
                        <h2>{t('meta')}</h2>
                        <dl className={'release-meta'}>
                            <dt>{t('title')}</dt>
                            <dd>{props.release.title}</dd>
                            <dt>{t('artists')}</dt>
                            <dd><ArtistList t={t} data={props.data} artists={props.release.artists}/></dd>
                            <dt>{t('genres')}</dt>
                            <dd>{props.release.genres.join(', ')}</dd>
                            <dt>{t('copyright')}</dt>
                            <dd>&copy; {props.release.copyright}</dd>
                            <dt>{t('release-date')}</dt>
                            <dd>{props.release.date + ' (' + releaseDistanceString + ')'}</dd>
                        </dl>
                    </div>
                    <div className="release-tracks-wrapper">
                        <h2>{t('tracks')}</h2>
                        <ol className={'release-tracks'}>
                            {props.release.tracks.map((track, idx) => {
                                return (
                                    <li key={idx} className={'release-track'}>
                                        <dl className={'track-meta'}>
                                            <dt>{t('title')}</dt>
                                            <dd>{track.title}&nbsp;({track.version})</dd>
                                            <dt>{t('artists')}</dt>
                                            <dd><ArtistList data={props.data} artists={props.release.artists}/></dd>
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
                </div>
            </div>) || null
    );
}

export default Release;