import React from 'react';
import Cover from "./cover";
import ReleaseMeta from "./release-meta";
import ReleaseLinks from "./release-links";
import ReleaseTracks from "./release-tracks";
import {TFunction} from "i18next";
import {Release} from "../../types/release/release";
import {Data} from "../../types/data";

type Props = {
    t: TFunction
    release: Release
    data: Data
}

function Release(props: Props) {

    const t = props.t;
    const release = props.release;

    return (release && (
            <div className={'release'}>
                <div className="release-data">
                    <Cover link={true} t={t} release={release}/>
                    <div className="release-data__inner">
                        <ReleaseMeta t={t} data={props.data} release={release}/>
                        <ReleaseLinks t={t} release={release}/>
                    </div>
                </div>
                <ReleaseTracks t={t} data={props.data} release={release}/>
            </div>) || null
    );
}

export default Release;