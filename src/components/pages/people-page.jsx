import React from 'react';
import {withRouter} from 'react-router-dom';
import ErrorBoundary from '../error-boundary';
import Row from '../row';
import {PeopleItemList, PersonInfo} from '../db-components';

const PeoplePage = ({history, match}) => {
    const {id} = match.params;

    return (
        <ErrorBoundary>
            <Row leftSide={<PeopleItemList setItemID={id => {
                history.push(`${id}`);
            }
            }/>
            }
                 rightSide={<PersonInfo id={id}/>}/>
        </ErrorBoundary>
    );
};

export default withRouter(PeoplePage);