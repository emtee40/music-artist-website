import React from 'react';
import KFLogo from "jsx:../assets/images/logo.svg";
import {Link, NavLink} from "react-router-dom";
import {TFunction} from "i18next";

type Props = {
    t: TFunction
}

function Nav(props: Props) {
    const t = props.t;

    return (
        <nav>
            <Link to={'/'}>
                <KFLogo id={'logo'} alt={t('logo-description')}/>
            </Link>
            <ul className={'nav'}>
                <li className="nav-item">
                    <NavLink activeClassName={'active'} exact={true} to={'/'}><>{t('about')}</></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName={'active'} to={'/artists'}><>{t('artists')}</></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName={'active'} to={'/releases'}><>{t('releases')}</></NavLink>
                </li>
                {/*
                <li className="nav-item">
                    <NavLink activeClassName={'active'} to={'/contact'}>{t('contact')}</NavLink>
                </li>
                */}
            </ul>
        </nav>
    );
}

export default Nav;
