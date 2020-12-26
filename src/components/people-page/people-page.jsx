import React, {Component} from 'react';

import './people-page.scss';

import StarAPI from '../../service';
import Row from '../row';
import ErrorBoundary from '../error-boundary';
import {PeopleItemList, PersonInfo} from '../db-components';

export default class PeoplePage extends Component {
    state = {
        selectedItemID: 3,
    };

    starAPI = new StarAPI();

    setItemID = selectedItemID => {
        this.setState({
            selectedItemID,
        });
    };

    render() {
        const itemList = <PeopleItemList setItemID={this.setItemID}/>;

        const itemInfo = <PersonInfo id={this.state.selectedItemID}/>;

        return (
            <ErrorBoundary>
                <Row leftSide={itemList}
                     rightSide={itemInfo}/>
            </ErrorBoundary>
        );
    };
}