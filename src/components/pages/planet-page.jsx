import React from 'react';
import {withRouter} from 'react-router-dom';
import ErrorBoundary from '../error-boundary';
import Row from '../row';
import {PlanetInfo, PlanetItemList} from '../db-components';

const PlanetPage = ({history, match}) => {
    const {id} = match.params;

    return (
        <ErrorBoundary>
            <Row leftSide={<PlanetItemList setItemID={id => {
                history.push(`${id}`);
            }
            }/>
            }
                 rightSide={<PlanetInfo id={id}/>}/>
        </ErrorBoundary>
    );
}

export default withRouter(PlanetPage);