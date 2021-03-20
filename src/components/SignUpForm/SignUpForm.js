import React from 'react';
import './SignUpForm.css'

const SignUpForm = () => {
    // email validator
    const emailValidator = email =>{
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    //password validator 
    const passwordValidator = password =>{
        return password.length > 10 ? true : false;
    }


    const handleSubmit = (e) =>{
        e.preventDefaule();
    }
    const handleBlur = (e)=>{
        let isFormValid = false;

        let fieldName = e.target.name;
        let fieldValue = e.target.value;

        if (fieldName === 'email'){
            isFormValid = emailValidator(fieldValue);
        } 

        if (fieldName= 'password1'){
            isFormValid = passwordValidator(fieldValue);
        }
    }

    return (
        <div>
            <form id='signUpForm' onSubmit = {handleSubmit}>
                <h3>Sign Up</h3>
                <input type="text" onBlur={handleBlur} name="name" placeholder='Your Name' id="signUpName" required/>
                <input type="text" onBlur={handleBlur} name="email" placeholder='Your Email' id="signUpEmail" required/>
                <input type="password" onBlur={handleBlur} name="password1" placeholder='Password' id="signUpPass1" required/>
                <input type="password" onBlur={handleBlur} name="password2" placeholder='Re-type Password' id="signUpPass2" required/>
                <input type="submit" name="submit" id="signUpSubmit"/>
                <p>*Password needs to be <br/> at least 8 characters or more </p>
            </form>
        </div>
    );
};

export default SignUpForm;