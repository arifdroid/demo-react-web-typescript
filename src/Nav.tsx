import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {

    const navStyle = {
        color:"white" 
    }

    return (
    <nav>
        <Link to='/'>
        <h1>Nav page</h1>
        </Link>
        <ul className='nav-links'>
            <Link  style={navStyle} to='/about'>
            <li>About</li>
            </Link>
            <Link to='/shop'>
            <li>Shop</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
