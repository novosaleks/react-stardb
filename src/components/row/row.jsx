import React from 'react';

import './row.scss';

const Row = ({leftSide, rightSide}) => {
    return (
        <section className="people-page container p-0 mb-5">
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

export default Row;