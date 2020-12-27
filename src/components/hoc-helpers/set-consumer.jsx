import React from 'react';
import {Consumer} from '../api-context';

const setConsumer = (InitialComponent, extractFromAPI) => {
    return props => {
        return (
            <Consumer>
                {
                    starAPI => {
                        const getData = extractFromAPI(starAPI);
                        return (
                            <InitialComponent {...props} {...getData}/>
                        );
                    }
                }
            </Consumer>
        );
    };
};

export default setConsumer;