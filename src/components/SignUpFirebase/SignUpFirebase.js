import React, { useContext, useState } from 'react';
import './SignUpFirebase.css'
import googleIcon from './../../Images/google_logo.svg'
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { handleGoogleLogin, handleSignOut, initLoginFramework } from '../../loginManager';

const SignUpFirebase = () => {

    const [user, setUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    initLoginFramework();
    
    const googleLogin = ()=>{
        handleGoogleLogin()
        .then(res => {
            setUser(res)
            history.replace(from)
        })
    }

    // const logOut = ()=>{
    //     handleSignOut()
    //     .then(res => setUser(res))
    // }

    return (
        <div>
            <div className='firebaseSignUp'>
            <div onClick={googleLogin}> 
            <div id='hrDiv'><hr id='leftHr' /> Or <hr id='rightHr' /></div>
            <div className='googleSignUp'>
                <img src={googleIcon} alt=""/>
                <p>Continue with Google</p>
            </div>
            </div>
        </div>
        </div>
    );
};

export default SignUpFirebase;