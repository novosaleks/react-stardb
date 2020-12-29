import React, {useEffect, useState} from 'react';

import './random-planet.scss';

import StarAPI from '../../service';

import Spinner from '../spinner';
import ErrorNotification from '../error-notification';

const RandomPlanet = ({updateInterval}) => {
    const swapi = new StarAPI();

    let timer = null;

    const [data, setData] = useState({
        planet: {},
        loading: true,
        failed: false,
    });

    useEffect(() => {
        updatePlanet();
        return () => clearTimeout(timer);
    }, []);

    const onPlanetLoaded = planet => {
        timer = setTimeout(updatePlanet, updateInterval);
        setData({
            planet,
            loading: false,
            fail: false,
        });
    };

    const onFailLoad = () => {
        timer = setTimeout(updatePlanet, updateInterval);
        setData(data => {
            return {
                ...data,
                loading: false,
                fail: true,
            };
        });
    };

    const updatePlanet = () => {
        const id = Math.round(Math.random() * 26) + 1;

        swapi.getPlanetByID(id)
            .then(onPlanetLoaded)
            .catch(onFailLoad);
    };

    const {planet, loading, fail} = data;

    let content = loading ? <Spinner/> :
        fail ? <ErrorNotification/> : <PlanetContent planet={planet}/>;

    return (
        <section className="random-planet mt-5 mb-5">
            <div className="container random-planet__container bg-dark p-3 text-center">
                {content}
            </div>
        </section>
    );
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

export default RandomPlanet;