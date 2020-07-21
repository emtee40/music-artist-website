import React, {useEffect, useState} from 'react';
import {compareAsc, parse} from "date-fns";
import Loader from "../loader";
import ReleaseLink from "../links/release-link";

function ReleaseList(props) {

    const t = props.t;
    const [sortedData, setSortedData] = useState(undefined);

    useEffect(() => {
        let data = [...props.releases];
        data.sort((a, b) => {
            const parsedDateA = parse(a.date, 'yyyy-MM-dd', new Date());
            const parsedDateB = parse(b.date, 'yyyy-MM-dd', new Date());
            return compareAsc(parsedDateA, parsedDateB);
        });
        setSortedData(data);
    }, []);

    if (!sortedData) return <Loader t={t}/>;

    return <ul className={'releases'}>{
        sortedData.map((release, idx) => {
            return (
                <li key={idx}>
                    <ReleaseLink t={t} release={release}/>
                </li>
            );
        })}</ul>;
}

export default ReleaseList;