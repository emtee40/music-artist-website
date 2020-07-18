import React from 'react';
import KFLogo from '../assets/images/logo.svg';

function Loader(props) {
    const t = props.t;
    return (
        <div className={'loader-wrapper'}>
            <KFLogo id={'loader'} alt={t('loading') + '...'}/>
            <p className={'loading-text'}>{t('loading')}</p>
        </div>
    );
}

export default Loader;