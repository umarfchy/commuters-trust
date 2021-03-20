import React from 'react';
import './SignUpFirebase.css'
import googleIcon from './../../Images/google_logo.svg'

const SignUpFirebase = () => {
    return (
        <div className='firebaseSignUp'>
            <div><hr id='leftHr' /> Or <hr id='rightHr' /></div>
            <div className='googleSignUp'>
                <img src= {googleIcon} alt=""/>
                <p>Continue with Google</p>
            </div>
        </div>
    );
};

export default SignUpFirebase;