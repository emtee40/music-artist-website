import React from 'react';
import {Link} from "react-router-dom";
import {TFunction} from "i18next";
import {Release} from "../../types/release/release";

type Props = {
    t: TFunction
    link?: boolean
    release: Release
}

function Cover(props: Props) {

    const t = props.t;
    const link = props.link;
    const coverAltText = t('cover-desc-pre') + props.release.title + t('cover-desc-mid') + props.release.artists.join(', ');
    const imageLink = '/covers/sm/' + props.release.ean + '.jpeg';

    const coverImage = <img src={imageLink} alt={coverAltText} className={'cover'}/>;

    if (link) {
        return (
            <Link to={'/covers/md/' + props.release.ean + '.jpeg'} target={'_blank'} className={'cover-link'}>
                {coverImage}
            </Link>
        );
    } else {
        return coverImage;
    }
}

export default Cover;
