import React, {Component} from 'react';
import ErrorNotification from '../error-notification';

export default class ErrorBoundary extends Component {
    state = {
        failed: false,
    };

    componentDidCatch() {
        this.setState({
            failed: true,
        });
    }

    render() {
        return this.state.failed ? <ErrorNotification/> : this.props.children;
    }
}