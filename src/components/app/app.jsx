import React from 'react';

import './app.scss';

import Context from '../api-context';
import StarAPI from '../../service';

import AppHeader from '../app-header';
import RandomPlanet from '../random-planet';
import ErrorBoundary from '../error-boundary';
import {PeoplePage, PlanetPage, StarshipPage} from '../pages';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


const App = () => {
    const starAPI = new StarAPI();

    return (
        <ErrorBoundary>
            <Context.Provider value={starAPI}>
                <Router>
                    <AppHeader/>
                    <RandomPlanet updateInterval={2500}/>
                    <Switch>
                        <Route path='/' render={() => <h2 className='text-center'>Welcome to StarDB</h2>} exact/>
                        <Route path='/people/:id?' component={PeoplePage}/>
                        <Route path='/planets/:id?' component={PlanetPage}/>
                        <Route path='/starships/:id?' component={StarshipPage}/>
                        <Route render={() => <h2 className='text-center'>Page not found</h2>}/>
                    </Switch>
                </Router>
            </Context.Provider>
        </ErrorBoundary>
    );
};

export default App;