import React, { useContext, useState } from 'react';
import './LocationSelector.css'
import peopleImg from './../../Images/peopleicon.png'
import rideImg1 from './../../Images/Frame-1.png'
import rideImg2 from './../../Images/Frame-2.png'
import rideImg3 from './../../Images/Frame-3.png'
import rideImg4 from './../../Images/Frame-4.png'
import { RidereContext, UserContext } from '../../App';
import Navigation from '../Navigation/Navigation';



const LocationSelector = () => {
    const [user, setUser] = useContext(UserContext);
    const [ride, setRide] = useContext(RidereContext);
    let placeHolderImg;

    if (ride === 'bike'){
        placeHolderImg = rideImg1;
    }
    else if (ride === 'car') {
        placeHolderImg = rideImg2;
    }
    else if (ride === 'bus') {
        placeHolderImg = rideImg3;
    }
    else{
        placeHolderImg = rideImg4;
    }


    const [locatorObj, setLocatorObj] = useState({
        from: '',
        to:''
    })

    const [visible, setVisible] = useState(false);

        const handleShowingFare = (e)=> {
        
            setVisible(true)
            
        }
        
        const savingLocation = (e)=>{
            const newLocatorObj = {...locatorObj}
            newLocatorObj[e.target.name] = e.target.value 
            setLocatorObj(newLocatorObj)
        }
        

        const optionShower = (rideImg, rideName)=>{
            return (
                <div className='availableOption'>
                        <img src={rideImg} className='imageOption1' alt=""/>
                        <p>{rideName}</p>
                        <img src={peopleImg} className='imageOption2' alt=""/>
                        <p>4</p>
                        <p>$60</p>
                    </div>
            )
        }
    return (
        <div>
            <Navigation loggedUserName = {user.name}></Navigation>
            <div className='displayArea'>
                {visible ? 
                <div className='searchArea'>
                    <p>You can travel from <strong>{locatorObj.from}</strong> to <strong>{locatorObj.to}</strong> on following options - </p>
                   <div className = 'availableOptionContainer'>
                    <>{optionShower(placeHolderImg, ride)}</>
                    <>{optionShower(placeHolderImg, ride)}</>
                    <>{optionShower(placeHolderImg, ride)}</>
                   </div>
                </div>
                    :
                    <form className='searchArea' onSubmit={handleShowingFare}> 
                        <input type="text" name='from' onBlur={savingLocation} placeholder='From' required/>
                        <input type="text" name='to' onBlur={savingLocation} placeholder='To' required/>
                        <input type="submit" id='formCustomBtn' value="Submit"/>
                </form> }
                <div className='mapArea'>

                </div>
            </div>
        </div>
    );
};

export default LocationSelector;