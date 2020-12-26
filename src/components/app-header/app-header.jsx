import React from 'react';

import './app-header.scss';

const AppHeader = () => {
    return (
        <header className="app-header mt-2">
            <div className="container d-flex align-items-center">
                <div className="app-header__logo">
                    Star DB
                </div>
                <ul className="app-header__links d-flex list-unstyled justify-content-between">
                    <li className="app-header__links-item">People</li>
                    <li className="app-header__links-item">Planets</li>
                    <li className="app-header__links-item">Starships</li>
                </ul>
            </div>
        </header>
    );
};

export default AppHeader;