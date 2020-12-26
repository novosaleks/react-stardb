import React from 'react';

import './app.scss';

import AppHeader from '../app-header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import {Provider} from '../api-context';
import StarAPI from '../../service';
import ErrorBoundary from '../error-boundary';

const App = () => {
    const starAPI = new StarAPI();
    return (
        <ErrorBoundary>
            <Provider value={starAPI}>
                <AppHeader/>
                <RandomPlanet/>
                <PeoplePage/>
            </Provider>
        </ErrorBoundary>
    );
};

export default App;