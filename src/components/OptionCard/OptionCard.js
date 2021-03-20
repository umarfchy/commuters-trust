import React from 'react';
import './OptinoCard.css'
import rideImg1 from './../../Images/Frame-1.png'
import rideImg2 from './../../Images/Frame-2.png'
import rideImg3 from './../../Images/Frame-3.png'
import rideImg4 from './../../Images/Frame-4.png'
import { useHistory } from 'react-router';

const OptionCard = () => {
    const history = useHistory();   

    const handleClickRide = ()=>{
        history.push('/location')
    }

    const card = (rideType, rideImg) =>{
        return(
            <div onClick = {handleClickRide} className='card'>
            <img src={rideImg} alt=""/>
            <h3>{rideType}</h3>
            </div>
        )
    }    

    return (
        <div className='cards'>
            <>{card('Bike', rideImg1)}</>
            <>{card('Car', rideImg2)}</>
            <>{card('Bus', rideImg3)}</>
            <>{card('Train', rideImg4)}</>
        </div>
    );
};

export default OptionCard;