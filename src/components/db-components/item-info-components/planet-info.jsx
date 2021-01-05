import React from 'react';
import ItemInfo, {InfoLabel} from '../../item-info';
import {setConsumer} from '../../hoc-helpers';

const PlanetInfo = (props) => {
    let content =
        <ItemInfo {...props}>
            <InfoLabel title='Diameter' value='diameter'/>
            <InfoLabel title='Rotation period' value='rotationPeriod'/>
            <InfoLabel title='Population' value='population'/>
        </ItemInfo>;

    if (!props.id) {
        content = <h2>Choose item from the list</h2>;
    }

    return content;
};

const getPlanetMethods = API => {
    return {
        getItem: API.getPlanetByID,
        getURL: API.getPlanetURL,
    };
};

export default setConsumer(PlanetInfo, getPlanetMethods);