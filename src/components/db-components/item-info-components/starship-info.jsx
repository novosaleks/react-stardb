import React from 'react';
import ItemInfo, {InfoLabel} from '../../item-info';
import {setConsumer} from '../../hoc-helpers';

const StarshipInfo = (props) => {
    return (
        <ItemInfo {...props}>
            <InfoLabel title='Model' value='model'/>
            <InfoLabel title='Capacity' value='capacity'/>
            <InfoLabel title='Cost' value='cost'/>
        </ItemInfo>
    );
};

const getStarshipMethods = API => {
    return {
        getItem: API.getStarshipByID,
        getURL: API.getStarshipURL,
    };
};

export default setConsumer(StarshipInfo, getStarshipMethods);