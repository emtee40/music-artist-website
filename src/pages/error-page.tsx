import React, {Component, ErrorInfo} from 'react';
import ErrorView from "../components/error-view";
import ScrollToTop from "../components/scroll-to-top";
import {TFunction} from "i18next";

type Props = {
    t: TFunction
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

    static getDerivedStateFromError(error: Error) {
        return {hasError: true, error: error};
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        // You can also log the error to an error reporting service
        /*TODO: (re-)add error tracking*/
    }

    render() {
        if (this.state.hasError) {
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
