import React, {Component} from 'react';
import Tracking from "../components/tracking";
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

    render() {
        if (this.state.hasError) {
            return (
                <div className={'wrapper'}>
                    <ScrollToTop />
                    <Tracking error={this.state.error}/>
                    <ErrorView t={this.t} errorMsg={t('javascript_error_text')} />
                </div>
            );
        }

        return this.props.children;
    }
}
