import React from 'react';
import PropTypes from 'prop-types';

import './row.scss';

const Row = ({leftSide, rightSide}) => {
    return (
        <section className="page__row container p-0 mb-5">
            <div className="row">
                <div className="col-md-6">
                    {leftSide}
                </div>
                <div className="col-md-6 mt-md-0 mt-5">
                    {rightSide}
                </div>
            </div>
        </section>
    );
};

Row.propTypes = {
    leftSide: PropTypes.node,
    rightSide: PropTypes.node,
}

export default Row;