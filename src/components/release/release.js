import React from 'react';
import {formatDistanceToNow, parse} from "date-fns";
import Cover from "./cover";
import ArtistList from "../artist/artist-list";

function Release(props) {

    const parsedDate = parse(props.release.date, 'yyyy-MM-dd', new Date());
    const releaseDistanceString = formatDistanceToNow(parsedDate, {addSuffix: true});

    return (props.release && (
            <div className={'release'}>
                <Cover release={props.release}/>
                <div className="release-data">
                    <div className="release-meta-wrapper">
                        <h2>Meta</h2>
                        <dl className={'release-meta'}>
                            <dt>Title</dt>
                            <dd>{props.release.title}</dd>
                            <dt>Artists</dt>
                            <dd><ArtistList data={props.data} artists={props.release.artists}/></dd>
                            <dt>Genres</dt>
                            <dd>{props.release.genres.join(', ')}</dd>
                            <dt>Copyright</dt>
                            <dd>&copy; {props.release.copyright}</dd>
                            <dt>Release Date</dt>
                            <dd>{props.release.date + ' (' + releaseDistanceString + ')'}</dd>
                        </dl>
                    </div>
                    <div className="release-tracks-wrapper">
                        <h2>Tracks</h2>
                        <ol className={'release-tracks'}>
                            {props.release.tracks.map((track, idx) => {
                                return (
                                    <li key={idx} className={'release-track'}>
                                        <dl className={'track-meta'}>
                                            <dt>Title</dt>
                                            <dd>{track.title}&nbsp;({track.version})</dd>
                                            <dt>Artists</dt>
                                            <dd><ArtistList data={props.data} artists={props.release.artists}/></dd>
                                            <dt>ISRC</dt>
                                            <dd>{track.isrc}</dd>
                                            <dt>Copyright</dt>
                                            <dd>&copy;&nbsp;{track.copyright}</dd>
                                            <dt>Sound Recording</dt>
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