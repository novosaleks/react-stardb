import React from 'react';

import './app.scss';

import AppHeader from '../app-header';
import RandomPlanet from '../random-planet';
import {Provider} from '../api-context';
import StarAPI from '../../service';
import ErrorBoundary from '../error-boundary';
import {PeoplePage} from '../pages';

const App = () => {
    const starAPI = new StarAPI();
    return (
        <ErrorBoundary>
            <Provider value={starAPI}>
                <AppHeader/>
                <RandomPlanet updateInterval={2500}/>
                <PeoplePage/>
            </Provider>
        </ErrorBoundary>
    );
};

export default App;