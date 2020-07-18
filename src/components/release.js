import React from 'react';
import {toSlug} from "../util";
import {format, parse, formatDistanceToNow} from "date-fns";
import Cover from "./release/cover";

function Release(props) {

    console.log(props.release);

    const parsedDate = parse(props.release.date, 'yyyy-MM-dd', new Date());
    const releaseDistanceString = formatDistanceToNow(parsedDate, {addSuffix: true});

    return (props.release && (
            <div className={'release'}>
                <Cover release={props.release} />
                <dl className={'release-meta'}>
                    <dt>Title</dt>
                    <dd>{props.release.title}</dd>
                    <dt>Artists</dt>
                    <dd>
                        <ul className={'artists'}>
                            {props.release.artists.map((artist, idx) => {
                                return (
                                    <li key={idx}>
                                        <a href={'/artist/' + toSlug(artist)}>{artist}</a>
                                    </li>
                                );
                            })}
                        </ul>
                    </dd>
                    <dt>Genres</dt>
                    <dd>{props.release.genres.join(', ')}</dd>
                    <dt>Copyright</dt>
                    <dd>&copy; {props.release.copyright}</dd>
                    <dt>Release Date</dt>
                    <dd>{ props.release.date + ' (' + releaseDistanceString + ')'}</dd>
                </dl>
            </div>) || null
    );
}

export default Release;