import React from 'react';
import ItemInfo, {InfoLabel} from '../../item-info';
import {setConsumer} from '../../hoc-helpers';

const PlanetInfo = (props) => {
    return (
        <ItemInfo {...props}>
            <InfoLabel title='Diameter' value='diameter'/>
            <InfoLabel title='Rotation period' value='rotationPeriod'/>
            <InfoLabel title='Population' value='population'/>
        </ItemInfo>
    );
};

const getPlanetMethods = API => {
    return {
        getItem: API.getPlanetByID,
        getURL: API.getPlanetURL,
    };
};

export default setConsumer(PlanetInfo, getPlanetMethods);