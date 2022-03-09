import React from 'react';
import logo from '../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArchway, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />

            <div className="search-area">
            <input type="text" placeholder='Search' />
            <button className='search-btn'> <FontAwesomeIcon icon={faMagnifyingGlass} /> </button>
            </div>
            
            

            <nav>
            <a href="/shop">Shop</a>
            <a href="/review">Order Review</a>
            <a href="/manage"> Manage Inventory</a>
            </nav>
        </div>

        
    );
};

export default Header;