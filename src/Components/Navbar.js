import React from 'react'
import {
    Link
  } from "react-router-dom";

import './Navbar.scss';




function Navbar() {
    return (
        <div className='navbar'>
            <p className="navbar__title">
                <span className="navbar__title--color">
                    Dev
                </span>
                challenges.io
            </p>
            <ul className="navbar__list">
                <li className="navbar__el">
                    <Link to="#" className='navbar__link'>
                        Colors
                    </Link>
                </li>
                <li className="navbar__el">
                    <Link to="#" className='navbar__link'>
                        Typography
                    </Link>
                </li>
                <li className="navbar__el">
                    <Link to="#" className='navbar__link'>
                        Spaces
                    </Link>
                </li>
                <li className="navbar__el">
                    <Link to="#" className='navbar__link navbar__link--actif'>
                        Buttons
                    </Link>
                </li>
                <li className="navbar__el">
                    <Link to="#" className='navbar__link'>
                        Inputs
                    </Link>
                </li>
                <li className="navbar__el">
                    <Link to="#" className='navbar__link'>
                        Grid
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
