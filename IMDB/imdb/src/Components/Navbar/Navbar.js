import React from 'react';
import Link from 'react-router-dom';

const Navbar=()=>{
    return(
        <div>
            <ul>
                <Link>
                <li to="/">Home</li>
                </Link>
                <Link>
                <li to="/search">Search</li>
                </Link>
                <Link>
                <li to="/about">About</li>
                </Link>
                <Link>
                <li to="/contact">Contact</li>
                </Link>
            </ul>
        </div>
    )
}

export default Navbar;