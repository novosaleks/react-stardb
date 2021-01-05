import React from 'react';
import {withRouter} from 'react-router-dom';
import ErrorBoundary from '../error-boundary';
import Row from '../row';
import {StarshipInfo, StarshipsItemList} from '../db-components';

const StarshipPage = ({history, match}) => {
    const {id} = match.params;

    return (
        <ErrorBoundary>
            <Row leftSide={<StarshipsItemList setItemID={id => {
                history.push(`${id}`);
            }
            }/>
            }
                 rightSide={<StarshipInfo id={id}/>}/>
        </ErrorBoundary>
    );
};

export default withRouter(StarshipPage);