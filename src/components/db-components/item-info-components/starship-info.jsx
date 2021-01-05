import React from 'react';
import ItemInfo, {InfoLabel} from '../../item-info';
import {setConsumer} from '../../hoc-helpers';

const StarshipInfo = (props) => {
    let content =
        <ItemInfo {...props}>
            <InfoLabel title='Model' value='model'/>
            <InfoLabel title='Capacity' value='capacity'/>
            <InfoLabel title='Cost' value='cost'/>
        </ItemInfo>;

    if (!props.id) {
        content = <h2>Choose item from the list</h2>;
    }

    return content;
};

const getStarshipMethods = API => {
    return {
        getItem: API.getStarshipByID,
        getURL: API.getStarshipURL,
    };
};

export default setConsumer(StarshipInfo, getStarshipMethods);