import React from 'react';
import './OptinoCard.css'
import { useHistory } from 'react-router';

const OptionCard = (props) => {
    const {rideType, rideImg} = props;

    const history = useHistory();   

    const handleClickRide = ()=>{
        history.push('/location')
    }

    const card = (Type, Img) =>{
        return(
            <div onClick = {handleClickRide} className='card'>
            <img src={Img} alt=""/>
            <h3>{Type}</h3>
            </div>
        )
    }    

    return (
        <> {card ( rideType,rideImg)}</>
        // <div className='cards'>
        //     <>{card('Bike', rideImg1)}</>
        //     <>{card('Car', rideImg2)}</>
        //     <>{card('Bus', rideImg3)}</>
        //     <>{card('Train', rideImg4)}</>
        // </div>
    );
};

export default OptionCard;