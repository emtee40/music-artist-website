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
import {TFunction} from "i18next";
import {Release} from "../../types/release/release";

type Props = {
    t: TFunction
    release: Release
}

function ReleaseLinks(props: Props) {

    const t = props.t;
    const release = props.release;

    return (
        <div className={'release-links__wrapper'}>
            <h2>{t('links')}</h2>
            <ul className="release-links">
                {(release.links.apple !== null) &&
                <li>
                    <a target={'_blank'} aria-label={t('aria:itunes')} href={release.links.apple}>
                        <FontAwesomeIcon title={t('aria:itunes')} icon={faItunes}/>
                    </a>
                </li>}
                {(release.links.spotify !== null) &&
                <li>
                    <a target={'_blank'} aria-label={t('aria:spotify')} href={release.links.spotify}>
                        <FontAwesomeIcon title={t('aria:spotify')} icon={faSpotify}/>
                    </a>
                </li>}
                {(release.links.youtube !== null) &&
                <li>
                    <a target={'_blank'} aria-label={t('aria:youtube')} href={release.links.youtube}>
                        <FontAwesomeIcon title={t('aria:youtube')} icon={faYoutube}/>
                    </a>
                </li>}
                {(release.links.deezer !== null) &&
                <li>
                    <a target={'_blank'} aria-label={t('aria:deezer')} href={release.links.deezer}>
                        <FontAwesomeIcon title={t('aria:deezer')} icon={faDeezer}/>
                    </a>
                </li>}
                {(release.links.soundcloud !== null) &&
                <li>
                    <a target={'_blank'} aria-label={t('aria:soundcloud')} href={release.links.soundcloud}>
                        <FontAwesomeIcon title={t('aria:soundcloud')} icon={faSoundcloud}/>
                    </a>
                </li>}
                {(release.links.amazon !== null) &&
                <li>
                    <a target={'_blank'} aria-label={t('aria:amazon')} href={release.links.amazon}>
                        <FontAwesomeIcon title={t('aria:amazon')} icon={faAmazon}/>
                    </a>
                </li>}
                {(release.links.napster !== null) &&
                <li>
                    <a target={'_blank'} aria-label={t('aria:napster')} href={release.links.napster}>
                        <FontAwesomeIcon title={t('aria:napster')} icon={faNapster}/>
                    </a>
                </li>}
                {(release.links.yandex !== null) &&
                <li>
                    <a target={'_blank'} aria-label={t('aria:yandex')} href={release.links.yandex}>
                        <FontAwesomeIcon title={t('aria:yandex')} icon={faYandex}/>
                    </a>
                </li>}
            </ul>
        </div>
    );
}

export default ReleaseLinks;
