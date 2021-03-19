import React from 'react';
import './OptinoCard.css'
import rideImg1 from './../../Images/Frame-1.png'
import rideImg2 from './../../Images/Frame-2.png'
import rideImg3 from './../../Images/Frame-3.png'
import rideImg4 from './../../Images/Frame-4.png'

const OptionCard = () => {

    const card = (rideType, rideImg) =>{
        return(
            <div className='card'>
            <img src={rideImg} alt=""/>
            <h3>{rideType}</h3>
            </div>
        )
    }    

    return (
        <div className='cards'>
            <>{card('bike', rideImg1)}</>
            <>{card('car', rideImg2)}</>
            <>{card('bus', rideImg3)}</>
            <>{card('train', rideImg4)}</>
        </div>
    );
};

export default OptionCard;