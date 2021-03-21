import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import { handleEmailSignUp, initLoginFramework } from '../../loginManager';
import './SignUpForm.css'

const SignUpForm = () => {
    initLoginFramework();
    const [localUser, setLocalUser] = useState({
        isSignedIn: false,
        name:'',
        email:'',
        password:''
    });
    const [user, setUser] = useContext(UserContext);
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

    const handleSubmit = (e) => {
        if (localUser.email && localUser.password) {
            handleEmailSignUp(localUser.email, localUser.password)
            .then(res => {
                localUser.isSignedIn = true;
                setUser(localUser)
                history.replace(from)
                console.log(user);
            })
        }
        e.preventDefault();
    }

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

        if (isFieldValid) {
            const newUserInfo = { ...localUser };
            newUserInfo[fieldName] = fieldValue;
            setLocalUser(newUserInfo);
        }

    }



    return (
        <div>
            <form id='signUpForm' onSubmit={handleSubmit}>

                <h3>Sign Up</h3>
                <input type="text" onBlur={handleBlur} name="name" placeholder='Your Name' id="signUpName" />
                <input type="text" name="email" onBlur={handleBlur} placeholder='Your Email' id="signUpEmail" required />
                <input type="password" name="password" onBlur={handleBlur} placeholder='Password' id="signUpPass1" required />
                {/* <input type="password" name="password1" placeholder='Re-type Password' id="signUpPass2" /> */}
                <input type="submit" value='Submit' id="signUpSubmit" />
                <p>*Password needs to be <br /> at least 8 characters or more </p>
                <br/>
                <h5>Already have an account? <Link to='/signin'>Log in here</Link></h5>
            </form>
        </div>
    );
};

export default SignUpForm;