import React from 'react';
import {format} from "date-fns";
import {Link} from "react-router-dom";
import {TFunction} from "i18next";

type Props = {
    t: TFunction
}

function Footer(props: Props) {

    const t = props.t;

    return (
        <div className={'footer'}>
            <span>&copy;&nbsp;{format(new Date(), 'yyyy')}&nbsp;{t('site-title')}</span>
            <Link to={'/privacy'}>{t('privacy-policy')}</Link>
            <a href={'https://git.lrk.sh/lerk/kfsite'}>{t('open-source')}</a>
        </div>
    );
}

export default Footer;
