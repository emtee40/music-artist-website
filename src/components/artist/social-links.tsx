import React from 'react';
import {TFunction} from "i18next";
import {Artist} from "../../types/artist/artist";
import {useMatomo} from "@jonkoops/matomo-tracker-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import {faGoogle, faMastodon, faSoundcloud, faYoutube} from "@fortawesome/free-brands-svg-icons";

type Props = {
    t: TFunction
    artist: Artist
}

function SocialLinks(props: Props) {

    const t = props.t;
    const artist = props.artist;
    const {trackEvent} = useMatomo();

    function trackSocialClick(action: string): void {
        trackEvent({
            category: 'Social',
            action: action,
            name: artist.name
        });
    }

    return (
        <div className={'social-links-wrapper'}>
            <ul className={'social-links'} aria-label={t('social-links')}>
                {artist.socialLinks.mail &&
                <li className={'social-link'}>
                    <a target={'_blank'}
                       onClick={() => trackSocialClick('Mail')}
                       href={'mailto:' + artist.socialLinks.mail}
                       aria-label={t('aria:social-mail')}>
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </a>
                </li>}
                {artist.socialLinks.mastodon &&
                <li className={'social-link'}>
                    <a target={'_blank'}
                       rel={'me'}
                       href={artist.socialLinks.mastodon}
                       onClick={() => trackSocialClick('Mastodon')}
                       aria-label={t('aria:social-mastodon')}>
                        <FontAwesomeIcon icon={faMastodon}/>
                    </a>
                </li>}
                {artist.socialLinks.google &&
                <li className={'social-link'}>
                    <a target={'_blank'}
                       href={artist.socialLinks.google}
                       onClick={() => trackSocialClick('Google')}
                       aria-label={t('aria:social-google')}>
                        <FontAwesomeIcon icon={faGoogle}/>
                    </a>
                </li>}
                {artist.socialLinks.soundcloud &&
                <li className={'social-link'}>
                    <a target={'_blank'}
                       href={artist.socialLinks.soundcloud}
                       onClick={() => trackSocialClick('SoundCloud')}
                       aria-label={t('aria:social-soundcloud')}>
                        <FontAwesomeIcon icon={faSoundcloud}/>
                    </a>
                </li>}
                {artist.socialLinks.youtube &&
                <li className={'social-link'}>
                    <a target={'_blank'}
                       href={artist.socialLinks.youtube}
                       onClick={() => trackSocialClick('YouTube')}
                       aria-label={t('aria:social-youtube')}>
                        <FontAwesomeIcon icon={faYoutube}/>
                    </a>
                </li>}
            </ul>
        </div>
    );
}

export default SocialLinks;
