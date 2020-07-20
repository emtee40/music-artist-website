import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
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

function ReleaseLinks(props) {

    const t = props.t;
    const release = props.release;

    return (
        <div className={'release-links__wrapper'}>
            <h2>{t('links')}</h2>
            <ul className="release-links">
                {(release.links.apple !== null) &&
                <li>
                    <a target={'_blank'} aria-label={t('aria:itunes')} href={release.links.apple}>
                        <FontAwesomeIcon alt={t('aria:itunes')} icon={faItunes}/>
                    </a>
                </li>}
                {(release.links.spotify !== null) &&
                <li>
                    <a target={'_blank'} aria-label={t('aria:spotify')} href={release.links.spotify}>
                        <FontAwesomeIcon alt={t('aria:spotify')} icon={faSpotify}/>
                    </a>
                </li>}
                {(release.links.youtube !== null) &&
                <li>
                    <a target={'_blank'} aria-label={t('aria:youtube')} href={release.links.youtube}>
                        <FontAwesomeIcon alt={t('aria:youtube')} icon={faYoutube}/>
                    </a>
                </li>}
                {(release.links.deezer !== null) &&
                <li>
                    <a target={'_blank'} aria-label={t('aria:deezer')} href={release.links.deezer}>
                        <FontAwesomeIcon alt={t('aria:deezer')} icon={faDeezer}/>
                    </a>
                </li>}
                {(release.links.soundcloud !== null) &&
                <li>
                    <a target={'_blank'} aria-label={t('aria:soundcloud')} href={release.links.soundcloud}>
                        <FontAwesomeIcon alt={t('aria:soundcloud')} icon={faSoundcloud}/>
                    </a>
                </li>}
                {(release.links.amazon !== null) &&
                <li>
                    <a target={'_blank'} aria-label={t('aria:amazon')} href={release.links.amazon}>
                        <FontAwesomeIcon alt={t('aria:amazon')} icon={faAmazon}/>
                    </a>
                </li>}
                {(release.links.napster !== null) &&
                <li>
                    <a target={'_blank'} aria-label={t('aria:napster')} href={release.links.napster}>
                        <FontAwesomeIcon alt={t('aria:napster')} icon={faNapster}/>
                    </a>
                </li>}
                {(release.links.yandex !== null) &&
                <li>
                    <a target={'_blank'} aria-label={t('aria:yandex')} href={release.links.yandex}>
                        <FontAwesomeIcon alt={t('aria:yandex')} icon={faYandex}/>
                    </a>
                </li>}
            </ul>
        </div>
    );
}

export default ReleaseLinks;