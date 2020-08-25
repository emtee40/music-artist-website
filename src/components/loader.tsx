import React from 'react';
import KFLogo from '../assets/images/logo.svg';
import {TFunction} from "i18next";

type Props = {
    t: TFunction
}

function Loader(props: Props) {
    const t = props.t;
    return (
        <div className={'loader-wrapper'}>
            <KFLogo id={'loader'} alt={t('loading') + '...'}/>
            <p className={'loading-text'}>{t('loading')}</p>
        </div>
    );
}

export default Loader;