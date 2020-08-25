import React from 'react';
import {TFunction} from "i18next";

type Props = {
    t: TFunction
    errorMsg: string | undefined
}

function ErrorView(props: Props) {

    const t = props.t;
    const errorMsg = props.errorMsg || t('generic-error-msg');

    return (
        <div className={'error-view'}>
            <h1>{t('error')}</h1>
            <p>{errorMsg}</p>
        </div>
    );
}

export default ErrorView;
