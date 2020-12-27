import React, {Component} from 'react';

import Row from '../row';
import ErrorBoundary from '../error-boundary';
import {PlanetInfo, PlanetItemList} from '../db-components';

export default class PlanetPage extends Component {
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
                <Row leftSide={<PlanetItemList setItemID={this.setItemID}/>}
                     rightSide={<PlanetInfo id={this.state.selectedItemID}/>}/>
            </ErrorBoundary>
        );
    };
}