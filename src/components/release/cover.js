import React from 'react';

function Cover(props) {

    const coverAltText = 'Cover art for ' + props.release.title + ' by ' + props.release.artists.join(', ');
    const imageLink = '/covers/sm/' + props.release.ean + '.jpeg';

    return (
        <img src={imageLink} alt={coverAltText} className={'cover'}/>
    );
}

export default Cover;