import React from 'react';

const setRenderFunction = (ComponentToView, renderFunction) => {
    return (props) => {
        return (
            <ComponentToView {...props}>
                {renderFunction}
            </ComponentToView>
        );
    };
};

export default setRenderFunction;