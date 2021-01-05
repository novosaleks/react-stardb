import React, {useEffect, useState} from 'react';

const setEntities = (ComponentToView) => {
    return (props) => {
        const [items, setItems] = useState([]);

        useEffect(() => {
            props.getData()
                .then(items => setItems(items));
        }, [props]);

        return <ComponentToView {...props} itemList={items}/>;
    };
};

export default setEntities;