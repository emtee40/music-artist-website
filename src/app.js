import React, {useEffect, useState} from 'react';
import {Route, Switch} from "react-router";
import Nav from "./components/nav";
import ReleasesPage from "./pages/releases-page";
import Loader from "./components/loader";
import ReleasePage from "./pages/release-page";
import ArtistPage from "./pages/artist-page";
import ArtistsPage from "./pages/artists-page";
import {format} from "date-fns";
import {useTranslation} from 'react-i18next';
import ErrorPage from "./pages/error-page";
import ContactPage from "./pages/contact-page";
import MainPage from "./pages/main-page";
import AboutPage from "./pages/about-page";

function App(props) {
    const {t} = useTranslation();
    const paq = props.paq;
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
            <ErrorPage t={t} paq={paq}>
                {(data && <Switch>
                    <Route path={'/'} exact={true}>
                        <MainPage t={t} paq={paq}/>
                    </Route>
                    <Route path={'/about'} exact={true}>
                        <AboutPage t={t} paq={paq}/>
                    </Route>
                    <Route path={'/contact'} exact={true}>
                        <ContactPage paq={paq} t={t}/>
                    </Route>
                    <Route path={'/releases'} exact={true}>
                        <ReleasesPage paq={paq} t={t} data={data}/>
                    </Route>
                    <Route path={'/artists'} exact={true}>
                        <ArtistsPage paq={paq} t={t} data={data}/>
                    </Route>
                    <Route path={'/release/:ean'}
                           render={({match}) => {
                               return match.params.ean &&
                                   <ReleasePage paq={paq} t={t} data={data} ean={match.params.ean}/>; //TODO render error in 'or'
                           }}
                           exact={true}/>
                    <Route path={'/artist/:slug'}
                           render={({match}) => {
                               return match.params.slug &&
                                   <ArtistPage paq={paq} t={t} data={data} slug={match.params.slug}/>; //TODO render error in 'or'
                           }}
                           exact={true}/>
                </Switch>) || <Loader t={t}/>}
            </ErrorPage>
            <span className="footer">&copy; {format(new Date(), 'yyyy')}&nbsp;{t('site-title')}</span>
        </div>
    );
}

export default App;