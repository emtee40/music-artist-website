import React from 'react';
import KFLogo from 'jsx:../assets/images/logo.svg';
import {TFunction} from "i18next";

type Props = {
    t?: TFunction
}

function Loader(props: Props) {
    const loadingText = props.t !== undefined ? props.t('loading') : 'Loading';

    return (
        <div className={'loader-wrapper'}>
            <KFLogo id={'loader'} alt={loadingText + '…'}/>
            <p className={'loading-text'}>{loadingText}</p>
        </div>
    );
}

export default Loader;
