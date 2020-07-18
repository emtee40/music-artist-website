import React, {useEffect, useState} from 'react';
import {Route, Switch} from "react-router-dom";
import Nav from "../components/nav";
import ReleasesPage from "./releases-page";
import Loader from "../components/loader";
import ReleasePage from "./release-page";
import ArtistPage from "./artist-page";
import ArtistsPage from "./artists-page";
import {format} from "date-fns";
import ScrollToTop from "../components/scroll-to-top";

function App() {
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
            <Nav/>
            {(data && <Switch>
                <Route path={'/'} exact={true}>
                    <div className="wrapper">
                        <p>This page is currently under construction!</p>
                    </div>
                </Route>
                <Route path={'/about'} exact={true}>
                    <Loader/>
                </Route>
                <Route path={'/releases'} exact={true}>
                    <ReleasesPage data={data}/>
                </Route>
                <Route path={'/artists'} exact={true}>
                    <ArtistsPage data={data}/>
                </Route>
                <Route path={'/release/:ean'}
                       render={({match}) => {
                           return match.params.ean && <ReleasePage data={data} ean={match.params.ean}/>; //TODO render error in 'or'
                       }}
                       exact={true}/>
                <Route path={'/artist/:slug'}
                       render={({match}) => {
                           return match.params.slug && <ArtistPage data={data} slug={match.params.slug}/>; //TODO render error in 'or'
                       }}
                       exact={true}/>
            </Switch>) || <Loader/>}
            <span className="footer">&copy; {format(new Date(), 'yyyy')} Kratzen und Fauchen</span>
        </div>
    );
}

export default App;