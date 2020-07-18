import React from 'react';

function Cover(props) {

    const t = props.t;
    const coverAltText = t('cover-desc-pre') + props.release.title + t('cover-desc-mid') + props.release.artists.join(', ');
    const imageLink = '/covers/sm/' + props.release.ean + '.jpeg';

    return <img src={imageLink} alt={coverAltText} className={'cover'}/>;
}

export default Cover;