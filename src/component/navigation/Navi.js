import React from 'react';
import {Link} from 'react-router-dom';

function NavigationTabs() {
    return (
        <ul className="nav nav-tabs navbar-light bg-light container-fluid  fixed-top">
            <li className="nav-item">
                <Link to='/addalbums' className="nav-link">Add Songs</Link>
            </li>
            <li className="nav-item">
                <Link to='/viewalbums' className="nav-link">View Album</Link>
            </li>
        </ul>
    )
}

export default NavigationTabs;
