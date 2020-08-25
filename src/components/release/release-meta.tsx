import React from 'react';
import ArtistList from "../artist/artist-list";
import {formatDistanceToNow, parse} from "date-fns";
import {TFunction} from "i18next";
import {Release} from "../../types/release/release";
import {Data} from "../../types/data";

type Props = {
    t: TFunction
    release: Release
    data: Data
}

function ReleaseMeta(props: Props) {

    const t = props.t;
    const release = props.release;

    const parsedDate = parse(release.date, 'yyyy-MM-dd', new Date());
    const releaseDistanceString = formatDistanceToNow(parsedDate, {addSuffix: true});

    return (
        release && <div className={'release-meta__wrapper'}>
            <h2>{t('meta')}</h2>
            <dl className={'release-meta'}>
                <dt>{t('title')}</dt>
                <dd>{release.title}</dd>
                <dt>{t('artists')}</dt>
                <dd><ArtistList t={t} data={props.data} artists={release.artists}/></dd>
                <dt>{t('genres')}</dt>
                <dd>{release.genres.join(', ')}</dd>
                <dt>{t('copyright')}</dt>
                <dd>&copy; {release.copyright}</dd>
                <dt>{t('release-date')}</dt>
                <dd>{release.date + ' (' + releaseDistanceString + ')'}</dd>
            </dl>
        </div>
    );
}

export default ReleaseMeta;