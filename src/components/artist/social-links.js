import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import {faGoogle, faMastodon, faSoundcloud, faYoutube} from "@fortawesome/free-brands-svg-icons";

function SocialLinks(props) {

    const t = props.t;
    const artist = props.artist;

    return (
        <div className={'social-links-wrapper'}>
            <ul className={'social-links'} aria-label={t('social-links')}>
                {artist.socialLinks.mail &&
                <li className={'social-link'}>
                    <a target={'_blank'} href={'mailto:' + artist.socialLinks.mail} aria-label={t('aria:social-mail')}><FontAwesomeIcon icon={faEnvelope} /></a>
                </li>}
                {artist.socialLinks.mastodon &&
                <li className={'social-link'}>
                    <a target={'_blank'} rel={'me'} href={artist.socialLinks.mastodon} aria-label={t('aria:social-mastodon')}><FontAwesomeIcon icon={faMastodon} /></a>
                </li>}
                {artist.socialLinks.google &&
                <li className={'social-link'}>
                    <a target={'_blank'} href={artist.socialLinks.google} aria-label={t('aria:social-google')}><FontAwesomeIcon icon={faGoogle} /></a>
                </li>}
                {artist.socialLinks.soundcloud &&
                <li className={'social-link'}>
                    <a target={'_blank'} href={artist.socialLinks.soundcloud} aria-label={t('aria:social-soundcloud')}><FontAwesomeIcon icon={faSoundcloud} /></a>
                </li>}
                {artist.socialLinks.youtube &&
                <li className={'social-link'}>
                    <a target={'_blank'} href={artist.socialLinks.youtube} aria-label={t('aria:social-soundcloud')}><FontAwesomeIcon icon={faYoutube} /></a>
                </li>}
            </ul>
        </div>
    );
}

export default SocialLinks;