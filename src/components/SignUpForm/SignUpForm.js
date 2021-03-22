import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import { handleEmailSignUp, initLoginFramework } from '../../loginManager';
import './SignUpForm.css'

const SignUpForm = () => {

    initLoginFramework();
    const [user, setUser] = useContext(UserContext);
    const [localUser, setLocalUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: ''
    });

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    // email validator
    const emailValidator = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    //password validator 
    const passwordValidator = password => {
        return password.length >= 8 ? true : false;
    }

    //working on both the email and password
    const handleBlur = (e) => {
        let isFieldValid;
        let fieldName = e.target.name;
        let fieldValue = e.target.value;

        if (fieldName === 'email') {
            isFieldValid = emailValidator(fieldValue);
        }

        if (fieldName === 'password') {
            isFieldValid = passwordValidator(fieldValue);
        }
        if (fieldName === 'name'){
            isFieldValid = fieldValue!==''
        }

        if (isFieldValid) {
            const newUserInfo = { ...localUser };
            newUserInfo[fieldName] = fieldValue;
            setLocalUser(newUserInfo);
        }

    }

    const handleSubmit = (e) => {
        if (localUser.name && localUser.email && localUser.password) {
            // sign up function sends data to firebase
            handleEmailSignUp(localUser.name, localUser.email, localUser.password)
                .then(res => {
                    handleResponse(res, true)
                })
                .catch(err => {
                    handleResponse(err, false)
                    console.log(err);
                })
        }
        e.preventDefault();
    }

    // conditional redirection of the page
    const handleResponse = (res, redirect) => {
        setUser(res);
        if (redirect) {
            history.replace(from);
        }
    }

    return (
        <div>
            <form id='signUpForm' onSubmit={handleSubmit}>
                <h3>Sign Up</h3>
                <input type="text"  name="name" onBlur={handleBlur} placeholder='Your Name' id="signUpName" required/>
                <input type="text" name="email" onBlur={handleBlur} placeholder='Your Email' id="signUpEmail" required />
                <input type="password" name="password" onBlur={handleBlur} placeholder='Password' id="signUpPass" required />
                <input type="submit" value='Submit' id="signUpSubmit" />
                <p>*Password needs to be <br /> at least 8 characters or more </p>
                <br />
                <h5>Already have an account? <Link to='/signin'>Log in here</Link></h5>
            </form>
        </div>
    );
};

export default SignUpForm;