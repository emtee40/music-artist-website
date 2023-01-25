import React, {Component, ErrorInfo} from 'react';
import ErrorView from "../components/error-view";
import ScrollToTop from "../components/scroll-to-top";
import {TFunction} from "i18next";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

type Props = {
    t: TFunction
    children?: React.ReactNode
}

type State = {
    hasError: boolean
    error: Error | undefined
}

export default class ErrorPage extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {hasError: false, error: undefined};
    }

    // noinspection JSUnusedGlobalSymbols
    static getDerivedStateFromError(error: Error) {
        return {hasError: true, error: error};
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        // You can also log the error to an error reporting service
        /*TODO: (re-)add error tracking*/
    }

    render() {
        if (this.state.hasError) {
            console.error(this.state.error);
            return (
                <div className={'wrapper'}>
                    <ScrollToTop/>
                    <ErrorView t={this.props.t} errorMsg={this.props.t('javascript-error-text')}/>
                </div>
            );
        }

        return this.props.children;
    }
}
