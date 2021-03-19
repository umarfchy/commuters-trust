import React from 'react';
import './SIgnInForm.css'

const SignInForm = () => {
    return (
        <div>
            <form id='signInForm'>
                <input type="email" name="email" placeholder='Email' id="signInEmail"/>
                <input type="email" name="password" placeholder='Password' id="signInPass"/>
                <input type="submit" name="submit" id="signInSubmit"/>

            </form>
        </div>
    );
};

export default SignInForm;