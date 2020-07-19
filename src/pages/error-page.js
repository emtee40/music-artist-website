import React, {Component} from 'react';
import Tracking from "../components/tracking";

export default class ErrorPage extends Component {
    constructor(props) {
        super(props);
        this.t = props.t;
        this.paq = props.paq;
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
                    <Tracking paq={this.paq}
                              error={this.state.error} />
                    <h1>{this.t('error')}</h1>
                    <p>{this.t('error-text')}</p>
                </div>
            );
        }

        return this.props.children;
    }
}
