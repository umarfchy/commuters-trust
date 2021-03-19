import './Navigation.css'

import React from 'react';

const Navigation = () => {
    return (
        <nav className='navbar'>
            <div className='brandTitle'>Commuter's Trust</div>
            <div className='navbarLinks'>
                <ul>
                    <li><a href="Home">Home</a></li>
                    <li><a href="">Destination</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;