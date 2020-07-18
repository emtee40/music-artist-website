import React, {useEffect, useState} from 'react';
import logo from '../assets/images/logo.svg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Nav from "./nav";
import ReleasesPage from "./releases-page";
import Loader from "./loader";
import ReleasePage from "./release-page";

function App() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(undefined);
    const [data, setData] = useState(undefined);

    useEffect(() => {
        if (loading) return;
        setLoading(true);
        fetch("/data.json").then(response => response.json())
            .then((jsonData) => {
                // jsonData is parsed json object received from url
                console.log(jsonData)
                setLoading(false);
                setError(undefined)
                setData(jsonData);
            })
            .catch((error) => {
                // handle your errors here
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
                    <div className="wrapper">
                        <ReleasesPage data={data}/>
                    </div>
                </Route>
                <Route
                    path={'/release/:ean'}
                    render={({match}) => {
                        return match.params.ean && <ReleasePage releases={data.releases} ean={match.params.ean}/>; //TODO render error in 'or'
                    }}
                    exact={true}/>
            </Switch>) || <Loader/>}
            <span className="footer">&copy; Kratzen und Fauchen</span>
        </div>
    );
}

export default App;