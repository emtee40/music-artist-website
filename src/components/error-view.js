import React from 'react';

function ErrorView(props) {

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