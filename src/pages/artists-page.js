import React from 'react';
import ArtistLink from "../components/links/artist-link";
import ScrollToTop from "../components/scroll-to-top";
import {useMatomo} from "@datapunt/matomo-tracker-react";

function ArtistsPage(props) {

    const t = props.t;
    const data = props.data;
    const { trackPageView, trackEvent } = useMatomo();

    document.title = t('artists') + ' - ' + t('site-title');

    React.useEffect(() => {
        trackPageView()
    }, []);

    return (
        <div className="wrapper">
            <ScrollToTop/>
            <ul className={'artists-list'}>
                {data.artists.map((artist, idx) => <li key={idx}><ArtistLink t={t} artist={artist}/></li>)}
            </ul>
        </div>
    );
}

export default ArtistsPage;