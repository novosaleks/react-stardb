import React, {Component} from 'react';

import Row from '../row';
import ErrorBoundary from '../error-boundary';
import {StarshipInfo, StarshipsItemList} from '../db-components';

export default class StarshipPage extends Component {
    state = {
        selectedItemID: 3,
    };

    setItemID = selectedItemID => {
        this.setState({
            selectedItemID,
        });
    };

    render() {
        return (
            <ErrorBoundary>
                <Row leftSide={<StarshipsItemList setItemID={this.setItemID}/>}
                     rightSide={<StarshipInfo id={this.state.selectedItemID}/>}/>
            </ErrorBoundary>
        );
    }
}