import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'


const Header = () => {
    return (

        <nav>
            <ul>
                <li><Link to="/users">All Users</Link></li> 
                <li><Link to="/user/add">User Details</Link></li>
            </ul>
        </nav>
        
    );
};

export default Header;