import React from 'react';
import {format} from "date-fns";
import {Link} from "react-router-dom";

function Footer(props) {

    const t = props.t;

    return (
        <div className={'footer'}>
            <span className="footer">&copy; {format(new Date(), 'yyyy')}&nbsp;{t('site-title')}</span>
            <Link to={'/privacy'}>{t('privacy-policy')}</Link>
            <a href={'https://github.com/lfuelling/kfsite'}>{t('open-source')}</a>
        </div>
    );
}

export default Footer;