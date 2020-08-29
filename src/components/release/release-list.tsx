import React, {useEffect, useState} from 'react';
import {compareAsc, compareDesc, parse} from "date-fns";
import Loader from "../loader";
import ReleaseLink from "../links/release-link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";
import {TFunction} from "i18next";
import {Release} from "../../types/release/release";
import {Artist} from "../../types/artist/artist";

type Props = {
    t: TFunction
    releases: Array<Release>
    artist: Artist
}

function ReleaseList(props: Props) {

    const t = props.t;
    const [sortedData, setSortedData] = useState<Array<Release>>([]);
    const [sortDesc, setSortDesc] = useState(true);

    useEffect(() => {
        let data = [...props.releases];
        data.sort((a: Release, b: Release) => {
            const parsedDateA = parse(a.date, 'yyyy-MM-dd', new Date());
            const parsedDateB = parse(b.date, 'yyyy-MM-dd', new Date());
            return sortDesc ? compareDesc(parsedDateA, parsedDateB) : compareAsc(parsedDateA, parsedDateB);
        });
        setSortedData(data);
    }, [sortDesc]);

    if (!sortedData) return <Loader t={t}/>;

    const toggleSort = function () {
        setSortDesc(!sortDesc);
    }

    return (
        <div className={'release-list'}>
            <h3>{t('releases-by') + props.artist.name}
                <button onClick={toggleSort} className={'release-sort-btn'}
                        aria-label={t('aria:sort-button-pre') + (sortDesc ? t('aria:sort-button-desc') : t('aria:sort-button-asc'))}>
                    <FontAwesomeIcon icon={sortDesc ? faChevronDown : faChevronUp}/>
                </button>
            </h3>
            <div className={'release-list__inner'}>
                <ul className={'releases'}>
                    {sortedData.map((release: Release, idx: number) => {
                        return (
                            <li key={idx}>
                                <ReleaseLink t={t} release={release}/>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default ReleaseList;
