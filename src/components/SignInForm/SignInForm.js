import React from 'react';
import './SIgnInForm.css'

const SignInForm = () => {
    return (
        <div>
            <form id='signInForm'>
                <h3>Login</h3>
                <input type="email" name="email" placeholder='Email' id="signInEmail"/>
                <input type="password" name="password" placeholder='Password' id="signInPass"/>
                <input type="submit" name="submit" id="signInSubmit"/>
                <div id='signInFormBottom'>
                <label htmlFor="rememberMe"> <input type="checkbox" name="rememberMe" id="" /><span id='rememberMe'>Remember me</span></label>
                <a href="">Forgot password</a>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;