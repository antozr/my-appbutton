import React from 'react'
import {
    Link
  } from "react-router-dom";

import './Navbar.scss';




function Navbar() {

    function openBtn(){
        console.log('hello');
        let nav = document.querySelector('.navbar__list');

        if(nav.classList.contains('navbar__list--actif')){
            nav.classList.remove('navbar__list--actif');
        }else{
            nav.classList.add('navbar__list--actif');
        }
    }

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
            <div className="navbar__btnClo" onClick={openBtn}>
                <div className="navbar__btnBox"></div>
                <div className="navbar__btnBox"></div>
                <div className="navbar__btnBox"></div>
            </div>
        </div>
    )
}

export default Navbar
