import React from 'react';

import './item-list.scss';


const ItemList = ({itemList, children, setItemID}) => {

    const createItemList = arr => {
        return arr.map(item => {
            return (
                <li key={item.id}
                    className="list-group-item"
                    onClick={() => setItemID(item.id)}>{children(item)}</li>
            );
        });
    };

    const list = createItemList(itemList);

    return (
        <div className='app-list'>
            <ul className="list-group">
                {list}
            </ul>
        </div>
    );
};

export default ItemList;