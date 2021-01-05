import React from 'react';

import './app-header.scss';

import {Link} from 'react-router-dom'

const AppHeader = () => {
    return (
        <header className="app-header mt-2">
            <div className="container d-flex align-items-center">
                <div className="app-header__logo">
                    <Link to='/'>StarDB</Link>
                </div>
                <ul className="app-header__links d-flex list-unstyled justify-content-between">
                    <li className="app-header__links-item">
                        <Link to='/people/'>People</Link>
                    </li>
                    <li className="app-header__links-item">
                        <Link to='/planets/'>Planets</Link>
                    </li>
                    <li className="app-header__links-item">
                        <Link to='/starships/'>Starships</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default AppHeader;