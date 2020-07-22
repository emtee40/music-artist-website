import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import {faMastodon} from "@fortawesome/free-brands-svg-icons";

function SocialLinks(props) {

    const t = props.t;
    const artist = props.artist;

    return (
        <div className={'social-links-wrapper'}>
            <h3>{t('social-links')}</h3>
            <ul className={'social-links'}>
                {artist.socialLinks.mail &&
                <li className={'social-link'}>
                    <a target={'_blank'} href={'mailto:' + artist.socialLinks.mail} aria-label={t('aria:social-mail')}><FontAwesomeIcon icon={faEnvelope} /></a>
                </li>}
                {artist.socialLinks.mastodon &&
                <li className={'social-link'}>
                    <a target={'_blank'} rel={'me'} href={artist.socialLinks.mastodon} aria-label={t('aria:social-mastodon')}><FontAwesomeIcon icon={faMastodon} /></a>
                </li>}
            </ul>
        </div>
    );
}

export default SocialLinks;