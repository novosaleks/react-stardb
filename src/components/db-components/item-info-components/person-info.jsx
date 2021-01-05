import React from 'react';
import ItemInfo, {InfoLabel} from '../../item-info';
import {setConsumer} from '../../hoc-helpers';

const PersonInfo = (props) => {
    let content =
        <ItemInfo {...props}>
            <InfoLabel title='Gender' value='gender'/>
            <InfoLabel title='Eye Color' value='eyeColor'/>
            <InfoLabel title='Birth Year' value='birthYear'/>
        </ItemInfo>;

    if (!props.id) {
        content = <h2>Choose item from the list</h2>;
    }

    return content
};

const getPersonMethods = API => {
    return {
        getItem: API.getPersonByID,
        getURL: API.getPersonURL,
    };
};

export default setConsumer(PersonInfo, getPersonMethods);