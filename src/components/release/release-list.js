import React, {useEffect, useState} from 'react';
import {compareAsc, compareDesc, parse} from "date-fns";
import Loader from "../loader";
import ReleaseLink from "../links/release-link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronUp, faChevronDown} from "@fortawesome/free-solid-svg-icons";

function ReleaseList(props) {

    const t = props.t;
    const [sortedData, setSortedData] = useState(undefined);
    const [sortDesc, setSortDesc] = useState(true);

    useEffect(() => {
        let data = [...props.releases];
        data.sort((a, b) => {
            const parsedDateA = parse(a.date, 'yyyy-MM-dd', new Date());
            const parsedDateB = parse(b.date, 'yyyy-MM-dd', new Date());
            return sortDesc ? compareDesc(parsedDateA, parsedDateB) : compareAsc(parsedDateA, parsedDateB);
        });
        setSortedData(data);
    }, [sortDesc]);

    if (!sortedData) return <Loader t={t}/>;

    const toggleSort = function() {
        setSortDesc(!sortDesc);
    }

    return (
        <div className={'release-list-wrapper'}>
            <button onClick={toggleSort} className={'release-sort-btn'} aria-label={t('aria:sort-button-pre') + (sortDesc ? t('aria:sort-button-desc') : t('aria:sort-button-asc'))}>
                <FontAwesomeIcon icon={sortDesc ? faChevronDown : faChevronUp} />
            </button>
            <ul className={'releases'}>{
                sortedData.map((release, idx) => {
                    return (
                        <li key={idx}>
                            <ReleaseLink t={t} release={release}/>
                        </li>
                    );
                })}</ul>
        </div>
    );
}

export default ReleaseList;