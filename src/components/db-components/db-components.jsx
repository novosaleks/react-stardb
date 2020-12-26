import React from 'react';

import ItemList from '../item-list';
import {setEntities, setRenderFunction} from '../hoc-helpers';
import StarAPI from '../../service';
import ItemInfo, {InfoLabel} from '../item-info';
import {Consumer} from '../api-context';

const {
    getAllPeople,
    getAllPlanets,
    getAllStarships,
} = new StarAPI();

const renderName = ({name}) => <span>{name}</span>;

const PeopleItemList = setEntities(setRenderFunction(ItemList, renderName), getAllPeople);
const PlanetsItemList = setEntities(setRenderFunction(ItemList, renderName), getAllPlanets);
const StarshipsItemList = setEntities(setRenderFunction(ItemList, renderName), getAllStarships);

const PersonInfo = (props) => {
    return (
        <Consumer>
            {
                ({getPersonByID, getPersonURL}) => {
                    return (
                        <ItemInfo getItem={getPersonByID}
                                  getURL={getPersonURL}
                                  {...props}>
                            <InfoLabel title='Gender' value='gender'/>
                            <InfoLabel title='Eye Color' value='eyeColor'/>
                            <InfoLabel title='Birth Year' value='birthYear'/>
                        </ItemInfo>
                    );
                }
            }
        </Consumer>
    );
};

export {PeopleItemList, PlanetsItemList, StarshipsItemList, PersonInfo};