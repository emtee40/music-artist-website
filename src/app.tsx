import React, {useEffect, useState} from 'react';
import {Route, Switch} from "react-router";
import Nav from "./components/nav";
import Loader from "./components/loader";
import {useTranslation} from 'react-i18next';
import Footer from "./components/footer";
import ScrollToTop from "./components/scroll-to-top";
import ErrorView from "./components/error-view";
import {useMatomo} from '@datapunt/matomo-tracker-react';
import {getRandomInt} from "./util";
import {Data} from "./types/data";

const ErrorPage = React.lazy(() => import('./pages/error-page'));
const MainPage = React.lazy(() => import('./pages/main-page'));
const AboutPage = React.lazy(() => import('./pages/about-page'));
const ContactPage = React.lazy(() => import('./pages/contact-page'));
const ReleasesPage = React.lazy(() => import('./pages/releases-page'));
const ArtistsPage = React.lazy(() => import('./pages/artists-page'));
const PrivacyPage = React.lazy(() => import('./pages/privacy-page'));
const ReleasePage = React.lazy(() => import('./pages/release-page'));
const ArtistPage = React.lazy(() => import('./pages/artist-page'));

function App() {
    const {t} = useTranslation();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | undefined>(undefined);
    const [data, setData] = useState<Data | undefined>(undefined);
    const { enableLinkTracking } = useMatomo();

    enableLinkTracking();

    useEffect(() => {
        if (loading) return;
        setLoading(true);
        fetch("/data.json?" + getRandomInt(1000, 9999))
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
        <>
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
        </>
    );
}

export default App;