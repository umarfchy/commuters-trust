import React from 'react';
import Navigation from '../Navigation/Navigation';
import OptionCard from './../OptionCard/OptionCard'
import './Homepage.css'

const Homepage = () => {

    return (
        <div className = 'home'>
            <Navigation></Navigation>
            <div className='cardShowcase'>
            <OptionCard></OptionCard>
            </div>
        </div>
    );
};

export default Homepage;