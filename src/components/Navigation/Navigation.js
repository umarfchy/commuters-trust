import './Navigation.css'
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
    const {loggedUserName} = props;

    return (
        <nav className='navbar'>
            <div className='brandTitle'>Commuter's Trust</div>
            <div className='navbarLinks'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="#">Destination</Link></li>
                    <li><Link to="#">Blog</Link></li>
                    <li><Link to="#">Contact</Link></li>
                    <li>
                    {
                        loggedUserName ?<Link to="#">  {loggedUserName} </Link> : 
                        <Link to='/signin'>{'Login'}</Link>
                    }
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;