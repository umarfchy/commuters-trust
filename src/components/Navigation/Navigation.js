import './Navigation.css'

import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const [user, setUser] = useContext(UserContext);

    return (
        <nav className='navbar'>
            <div className='brandTitle'>Commuter's Trust</div>
            <div className='navbarLinks'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="#">Destination</Link></li>
                    <li><Link to="#">Blog</Link></li>
                    <li><Link to="#">Contact</Link></li>
                    <li><Link to="signin">{
                        user.name ?  user.name : 'Login'
                    }</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;