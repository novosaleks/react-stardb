import React, {Component} from 'react';

import './random-planet.scss';

import StarAPI from '../../service';

import Spinner from '../spinner';
import ErrorNotification from '../error-notification';

export default class RandomPlanet extends Component {

    swapi = new StarAPI();

    state = {
        planet: {},
        loading: true,
    };

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(() => this.updatePlanet(), 3500);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onPlanetLoaded = planet => {
        this.setState(
            {
                planet,
                loading: false,
                fail: false,
            });
    };

    onFailLoad = () => {
        this.setState({
            loading: false,
            fail: true,
        });
    };

    updatePlanet() {
        const id = Math.round(Math.random() * 26) + 1;

        this.swapi.getPlanetByID(id)
            .then(this.onPlanetLoaded)
            .catch(this.onFailLoad);
    }

    render() {
        const {planet, loading, fail} = this.state;

        let content = loading ? <Spinner/> :
            fail ? <ErrorNotification/> : <PlanetContent planet={planet}/>;

        return (
            <section className="random-planet mt-5 mb-5">
                <div className="container random-planet__container bg-dark p-3 text-center">
                    {content}
                </div>
            </section>
        );
    }
};

const PlanetContent = ({planet}) => {
    const {id, name, population, rotationPeriod, diameter} = planet;

    return (
        <div className="row align-items-center">
            <div className="col-2 text-left">
                <img className='w-100 rounded'
                     src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                     alt={name}/>
            </div>
            <div className="col-4 text-left">
                <h2 className="random-planet__title">{name}</h2>
                <ul className="list-group random-planet__descr list-group-flush ml-3">
                    <li className="list-group-item pt-0">Population: {population}</li>
                    <li className="list-group-item">Rotation period: {rotationPeriod}</li>
                    <li className="list-group-item">Diameter: {diameter}</li>
                </ul>
            </div>
        </div>
    );
};