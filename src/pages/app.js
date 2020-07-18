import React, {useEffect, useState} from 'react';
import {Route, Switch} from "react-router-dom";
import Nav from "../components/nav";
import ReleasesPage from "./releases-page";
import Loader from "../components/loader";
import ReleasePage from "./release-page";
import ArtistPage from "./artist-page";
import ArtistsPage from "./artists-page";
import {format} from "date-fns";
import {useTranslation} from 'react-i18next';

function App() {
    const {t} = useTranslation();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(undefined);
    const [data, setData] = useState(undefined);

    useEffect(() => {
        if (loading) return;
        setLoading(true);
        fetch("/data.json").then(response => response.json())
            .then((jsonData) => {
                setLoading(false);
                setError(undefined)
                setData(jsonData);
            })
            .catch((error) => {
                // TODO: handle error...
                console.error(error)
                setError(error);
            })
    }, [])

    return (
        <div>
            <Nav t={t}/>
            {(data && <Switch>
                <Route path={'/'} exact={true}>
                    <div className="wrapper">
                        {/* TODO: add widget for latest releases and artists */}
                        <p>{t('welcome-text')}</p>
                    </div>
                </Route>
                <Route path={'/about'} exact={true}>
                    <Loader t={t}/>
                </Route>
                <Route path={'/releases'} exact={true}>
                    <ReleasesPage t={t} data={data}/>
                </Route>
                <Route path={'/artists'} exact={true}>
                    <ArtistsPage t={t} data={data}/>
                </Route>
                <Route path={'/release/:ean'}
                       render={({match}) => {
                           return match.params.ean && <ReleasePage t={t} data={data} ean={match.params.ean}/>; //TODO render error in 'or'
                       }}
                       exact={true}/>
                <Route path={'/artist/:slug'}
                       render={({match}) => {
                           return match.params.slug && <ArtistPage t={t} data={data} slug={match.params.slug}/>; //TODO render error in 'or'
                       }}
                       exact={true}/>
            </Switch>) || <Loader t={t}/>}
            <span className="footer">&copy; {format(new Date(), 'yyyy')} Kratzen und Fauchen</span>
        </div>
    );
}

export default App;