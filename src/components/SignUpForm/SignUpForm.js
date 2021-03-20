import React from 'react';
import SignUpFirebase from '../SignUpFirebase/SignUpFirebase';
import './SignUpForm.css'

const SignUpForm = () => {
    return (
        <div>
            <form id='signUpForm'>
                <h3>Sign Up</h3>
                <input type="text" name="name" placeholder='Your Name' id="signUpName"/>
                <input type="email" name="email" placeholder='Your Email' id="signUpEmail"/>
                <input type="password" name="password1" placeholder='Password' id="signUpPass1"/>
                <input type="password" name="password2" placeholder='Re-type Password' id="signUpPass2"/>
                <input type="submit" name="submit" id="signUpSubmit"/>
            </form>
            <SignUpFirebase></SignUpFirebase>
        </div>
    );
};

export default SignUpForm;