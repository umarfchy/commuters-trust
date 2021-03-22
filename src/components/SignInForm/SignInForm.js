import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { handleEmailLogin, initLoginFramework } from '../../loginManager';
import './SignInForm.css'

const SignInForm = () => {
    initLoginFramework();
    
    //storing local user information
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

    const handleBlur = (e) => {
        let isFieldValid;
        let fieldName = e.target.name;
        let fieldValue = e.target.value;

        if (fieldName === 'email') {
            isFieldValid = emailValidator(fieldValue);
        }

        if (fieldName === 'password'){
            isFieldValid =  fieldValue !== '';
        }

        if (isFieldValid) {
            const newUserInfo = { ...localUser };
            newUserInfo[fieldName] = fieldValue;
            setLocalUser(newUserInfo);
        }
        
    }
    
    const handleSubmit = (e) => {
        if (localUser.email && localUser.password) {
            handleEmailLogin(localUser.email, localUser.password)
            .then(res => {
                handleResponse(res, true);
            })
            .catch(err => {
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
            <form id='signInForm' onSubmit={handleSubmit}>
                <h3>Login</h3>
                <input type="email" name="email" onBlur={handleBlur} placeholder='Email' id="signInEmail" required/>
                <input type="password" name="password" onBlur={handleBlur} placeholder='Password' id="signInPass" required/>
                <input type="submit" value='Submit' id="signInSubmit"/>
                <div id='signInFormBottom'>
                <label htmlFor="rememberMe"> <input type="checkbox" name="rememberMe" id="" /><span id='rememberMe'>Remember me</span></label>
                <a href="">Forgot password</a>
                </div>
                <h5>Create new account <Link to='/signup'>here</Link></h5>
            </form>
        </div>
    );
};

export default SignInForm;