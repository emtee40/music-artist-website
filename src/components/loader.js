import React from 'react';
import KFLogo from '../assets/images/logo.svg';

function Loader() {
    return (
        <div className={'loader-wrapper'}>
            <KFLogo id={'loader'} alt={'Loading...'} />
            <p className={'loading-text'}>Loading</p>
        </div>
    );
}

export default Loader;