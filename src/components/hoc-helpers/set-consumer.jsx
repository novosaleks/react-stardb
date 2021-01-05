import React, {useContext} from 'react';
import Context from '../api-context';

const setConsumer = (InitialComponent, extractFromAPI) => {

    return props => {
        const starAPI = useContext(Context);
        const getData = extractFromAPI(starAPI);

        return <InitialComponent {...props} {...getData}/>;
    };
};

export default setConsumer;