import React from 'react';
import logo from '../assets/images/logo.svg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Nav from "./nav";

function App() {
    return (
        <div>
            <Nav/>
            <Switch>
                <Route path={'/'} exact={true}>
                    <div className="wrapper">
                        <p>This page is currently under construction!</p>
                    </div>
                </Route>
            </Switch>
            <span className="footer">&copy; Kratzen und Fauchen</span>
        </div>
    );
}

export default App;