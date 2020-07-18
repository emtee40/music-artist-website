import React from 'react';
import KFLogo from '../assets/images/logo.svg';
import {Link, NavLink} from "react-router-dom";

function Nav() {
    return (
        <nav>
            <Link to={'/'}>
                <KFLogo id={'logo'} alt="Kratzen und Fauchen Logo"/>
            </Link>
            <ul className={'nav'}>
                <li className="nav-item">
                    <NavLink activeClassName={'active'} exact={true} to={'/'}>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName={'active'} to={'/about'}>About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName={'active'} to={'/artists'}>Artists</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName={'active'} to={'/releases'}>Releases</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName={'active'} to={'/contact'}>Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;