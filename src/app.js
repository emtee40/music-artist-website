import React, {useEffect, useState} from 'react';
import {Route, Switch} from "react-router";
import Nav from "./components/nav";
import ReleasesPage from "./pages/releases-page";
import Loader from "./components/loader";
import ReleasePage from "./pages/release-page";
import ArtistPage from "./pages/artist-page";
import ArtistsPage from "./pages/artists-page";
import {useTranslation} from 'react-i18next';
import ErrorPage from "./pages/error-page";
import ContactPage from "./pages/contact-page";
import MainPage from "./pages/main-page";
import AboutPage from "./pages/about-page";
import Footer from "./components/footer";
import PrivacyPage from "./pages/privacy-page";
import ScrollToTop from "./components/scroll-to-top";
import ErrorView from "./components/error-view";
import {useMatomo} from "@datapunt/matomo-tracker-react";

function App() {
    const {t} = useTranslation();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(undefined);
    const [data, setData] = useState(undefined);
    const { enableLinkTracking } = useMatomo();

    enableLinkTracking();

    useEffect(() => {
        if (loading) return;
        setLoading(true);
        fetch("/data.json")
            .then(response => response.json())
            .then((jsonData) => {
                setLoading(false);
                setError(undefined);
                setData(jsonData);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            })
    }, [])

    return (
        <div>
            <Nav t={t}/>
            {
                (error && <div className={'wrapper'}>
                    <ScrollToTop/>
                    <ErrorView t={t} errorMsg={t('data-error-text')}/>
                </div>) ||
                <ErrorPage t={t}>
                    {(data && <Switch>
                        <Route path={'/'} exact={true}>
                            <MainPage t={t}/>
                        </Route>
                        <Route path={'/about'} exact={true}>
                            <AboutPage t={t}/>
                        </Route>
                        <Route path={'/contact'} exact={true}>
                            <ContactPage t={t}/>
                        </Route>
                        <Route path={'/releases'} exact={true}>
                            <ReleasesPage t={t} data={data}/>
                        </Route>
                        <Route path={'/artists'} exact={true}>
                            <ArtistsPage t={t} data={data}/>
                        </Route>
                        <Route path={'/privacy'} exact={true}>
                            <PrivacyPage t={t}/>
                        </Route>
                        <Route path={'/release/:ean'}
                               render={({match}) => {
                                   return match.params.ean &&
                                       <ReleasePage t={t} data={data} ean={match.params.ean}/>; //TODO render error in 'or'
                               }}
                               exact={true}/>
                        <Route path={'/artist/:slug'}
                               render={({match}) => {
                                   return match.params.slug &&
                                       <ArtistPage t={t} data={data} slug={match.params.slug}/>; //TODO render error in 'or'
                               }}
                               exact={true}/>
                    </Switch>) || <Loader t={t}/>}
                </ErrorPage>
            }
            <Footer t={t}/>
        </div>
    );
}

export default App;