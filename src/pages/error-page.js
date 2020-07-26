import React, {Component} from 'react';
import ErrorView from "../components/error-view";
import ScrollToTop from "../components/scroll-to-top";

export default class ErrorPage extends Component {
    constructor(props) {
        super(props);
        this.t = props.t;
        this.state = {hasError: false, error: undefined};
    }

    static getDerivedStateFromError(error) {
        return {hasError: true, error: error};
    }

    componentDidCatch(error, info) {
        // You can also log the error to an error reporting service

    }

    /*TODO: (re-)add error tracking*/

    render() {
        if (this.state.hasError) {
            return (
                <div className={'wrapper'}>
                    <ScrollToTop/>
                    <ErrorView t={this.t} errorMsg={this.t('javascript-error-text')}/>
                </div>
            );
        }

        return this.props.children;
    }
}
