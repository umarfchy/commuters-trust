import React, { useContext } from 'react';
import { UserContext } from '../../App';
import Navigation from '../Navigation/Navigation';
import OptionCard from './../OptionCard/OptionCard'
import rideImg1 from './../../Images/Frame-1.png'
import rideImg2 from './../../Images/Frame-2.png'
import rideImg3 from './../../Images/Frame-3.png'
import rideImg4 from './../../Images/Frame-4.png'
import './Homepage.css'
import { useHistory } from 'react-router';

const Homepage = () => {
    const [ride, setRide] = useContext(UserContext);
    const history = useHistory();

    const handleClickRide1 = ()=>{
        setRide('bike')
        history.push('/location')
    }

    const handleClickRide2 = ()=>{
        setRide('car')
        history.push('/location')
    }

    const handleClickRide3 = ()=>{
        setRide('bus')
        history.push('/location')
    }

    const handleClickRide4 = ()=>{
        setRide('train')
        history.push('/location')
    }

    const card = (Type, Img, handleClickRide) =>{
        return(
            <div onClick = {handleClickRide} className='card'>
            <img src={Img} alt=""/>
            <h3>{Type}</h3>
            </div>
        )
    }    

    

    return (
        <div className = 'home'>
            <div className='cardShowcase'>
            <div className='cards'>
                    <>{card('Bike', rideImg1, handleClickRide1)}</>
                    <>{card('Car', rideImg2, handleClickRide2)}</>
                    <>{card('Bus', rideImg3, handleClickRide3)}</>
                    <>{card('Train', rideImg4, handleClickRide4)}</>
            </div>
            </div>
        </div>
    );
};

export default Homepage;