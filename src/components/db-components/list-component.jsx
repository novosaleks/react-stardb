import React from 'react';

import ItemList from '../item-list';
import {setConsumer, setEntities, setRenderFunction} from '../hoc-helpers';

const renderName = ({name}) => <span>{name}</span>;

const getPersonMethods = API => {
    return {
        getData: API.getAllPeople
    };
};

const getPlanetMethods = API => {
    return {
        getData: API.getAllPlanets
    };
};

const getStarshipMethods = API => {
    return {
        getData: API.getAllStarships
    };
};

const PeopleItemList = setConsumer(setEntities(setRenderFunction(ItemList, renderName)), getPersonMethods);
const PlanetItemList = setConsumer(setEntities(setRenderFunction(ItemList, renderName)), getPlanetMethods);
const StarshipsItemList = setConsumer(setEntities(setRenderFunction(ItemList, renderName)), getStarshipMethods);


export {PeopleItemList, PlanetItemList, StarshipsItemList};