import React, {Component} from 'react';

import Row from '../row';
import ErrorBoundary from '../error-boundary';
import {PeopleItemList, PersonInfo} from '../db-components';

export default class PeoplePage extends Component {
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
                <Row leftSide={<PeopleItemList setItemID={this.setItemID}/>}
                     rightSide={<PersonInfo id={this.state.selectedItemID}/>}/>
            </ErrorBoundary>
        );
    };
}