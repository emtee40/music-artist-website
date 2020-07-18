import React from 'react';
import KFLogo from '../assets/images/logo.svg';

function Loader() {
    return (
        <div className={'loader-wrapper'}>
            <KFLogo id={'loader'} alt={'Loading...'} />
        </div>
    );
}

export default Loader;