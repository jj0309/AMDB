import React from 'react';
import {Link} from 'react-router-dom';
import style from './css/navbar.module.css';

const Navbar=()=>{
    return(
        <div className={style.NavbarContainer}>
            <ul>
                <Link to="/">
                <li>Home</li>
                </Link>
                <Link to="/search">
                <li>Search</li>
                </Link>
                <Link to="/Discover">
                <li>Discover</li>
                </Link>
                <Link to="/about">
                <li>About</li>
                </Link>
                <Link to="/contact">
                <li>Contact</li>
                </Link>
            </ul>
        </div>
    )
}

export default Navbar;