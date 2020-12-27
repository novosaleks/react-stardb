import React from 'react';

import './app.scss';

import AppHeader from '../app-header';
import RandomPlanet from '../random-planet';
import {Provider} from '../api-context';
import StarAPI from '../../service';
import ErrorBoundary from '../error-boundary';
import {PeoplePage, PlanetPage, StarshipPage} from '../pages';

const App = () => {
    const starAPI = new StarAPI();
    return (
        <ErrorBoundary>
            <Provider value={starAPI}>
                <AppHeader/>
                <RandomPlanet/>
                <PeoplePage/>
                <PlanetPage/>
                <StarshipPage/>
            </Provider>
        </ErrorBoundary>
    );
};

export default App;