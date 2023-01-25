import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useMatomo} from "@jonkoops/matomo-tracker-react";
import {
    faAmazon,
    faDeezer,
    faItunes,
    faNapster,
    faSoundcloud,
    faSpotify,
    faYandex,
    faYoutube
} from "@fortawesome/free-brands-svg-icons";
import {TFunction} from "i18next";
import {Release} from "../../types/release/release";

type Props = {
    t: TFunction
    release: Release
}

function ReleaseLinks(props: Props) {

    const t = props.t;
    const release = props.release;
    const {trackEvent} = useMatomo();

    function trackStream(action: string): void {
        trackEvent({
            category: 'Stream',
            action: action,
            name: release.title + ' (' + release.ean + ')'
        });
    }

    return (
        <div className={'release-links__wrapper'}>
            <h2><>{t('links')}</></h2>
            <ul className="release-links">
                {(release.links.apple !== null) &&
                <li>
                    <a target={'_blank'}
                       aria-label={t('aria:itunes')}
                       onClick={() => trackStream('iTunes')}
                       href={release.links.apple}>
                        <FontAwesomeIcon title={t('aria:itunes')} icon={faItunes}/>
                    </a>
                </li>}
                {(release.links.spotify !== null) &&
                <li>
                    <a target={'_blank'}
                       aria-label={t('aria:spotify')}
                       onClick={() => trackStream('Spotify')}
                       href={release.links.spotify}>
                        <FontAwesomeIcon title={t('aria:spotify')} icon={faSpotify}/>
                    </a>
                </li>}
                {(release.links.youtube !== null) &&
                <li>
                    <a target={'_blank'}
                       aria-label={t('aria:youtube')}
                       onClick={() => trackStream('YouTube')}
                       href={release.links.youtube}>
                        <FontAwesomeIcon title={t('aria:youtube')} icon={faYoutube}/>
                    </a>
                </li>}
                {(release.links.deezer !== null) &&
                <li>
                    <a target={'_blank'}
                       aria-label={t('aria:deezer')}
                       onClick={() => trackStream('Deezer')}
                       href={release.links.deezer}>
                        <FontAwesomeIcon title={t('aria:deezer')} icon={faDeezer}/>
                    </a>
                </li>}
                {(release.links.soundcloud !== null) &&
                <li>
                    <a target={'_blank'}
                       aria-label={t('aria:soundcloud')}
                       onClick={() => trackStream('SoundCloud')}
                       href={release.links.soundcloud}>
                        <FontAwesomeIcon title={t('aria:soundcloud')} icon={faSoundcloud}/>
                    </a>
                </li>}
                {(release.links.amazon !== null) &&
                <li>
                    <a target={'_blank'}
                       aria-label={t('aria:amazon')}
                       onClick={() => trackStream('Amazon')}
                       href={release.links.amazon}>
                        <FontAwesomeIcon title={t('aria:amazon')} icon={faAmazon}/>
                    </a>
                </li>}
                {(release.links.napster !== null) &&
                <li>
                    <a target={'_blank'}
                       aria-label={t('aria:napster')}
                       onClick={() => trackStream('Napster')}
                       href={release.links.napster}>
                        <FontAwesomeIcon title={t('aria:napster')} icon={faNapster}/>
                    </a>
                </li>}
                {(release.links.yandex !== null) &&
                <li>
                    <a target={'_blank'}
                       aria-label={t('aria:yandex')}
                       onClick={() => trackStream('Yandex')}
                       href={release.links.yandex}>
                        <FontAwesomeIcon title={t('aria:yandex')} icon={faYandex}/>
                    </a>
                </li>}
            </ul>
        </div>
    );
}

export default ReleaseLinks;
