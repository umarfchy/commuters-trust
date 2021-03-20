import React, { useContext, useState } from 'react';
import './SignUpFirebase.css'
import googleIcon from './../../Images/google_logo.svg'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './../../firebase.config'
import { UserContext } from '../../App';

firebase.initializeApp(firebaseConfig);


const SignUpFirebase = () => {

    const provider = new firebase.auth.GoogleAuthProvider();
    // const [user, setUser] = useState({
    //         isSignedIn: false,  
    //         name: '',
    //         email: '',
    // })

    const [user, setUser] = useContext(UserContext);

    const handleSignIn = () => {
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            const {name, email, picture} = result.additionalUserInfo.profile
            const newUser = {
            isSignedIn: true,  
            name: name,
            email: email
            }
            setUser(newUser)
        }).catch((error) => {
            console.log('This is the log of error:\n\n' + error);
        });
    }

    const handleSignOut = ()=> {
        firebase.auth().signOut().then(() => {
        const signedOutUser = {
            isSignedIn: false,  
            name: '',
            email: ''
    }

        setUser(signedOutUser);

        }).catch((error) => {
        console.log(error);
        });
    }

    return (
        <div className='firebaseSignUp'>
            {user.isSignedIn ?
                <div style={{marginTop:'15rem'}}>
                    <h3> Name: { user.name} </h3>
                    <p> Email: {user.email} </p>
                    <button onClick={handleSignOut}> Sign out </button>
                </div> :
                
            <div onClick={handleSignIn}> 
            <div><hr id='leftHr' /> Or <hr id='rightHr' /></div>
            <div className='googleSignUp'>
                <img src={googleIcon} alt=""/>
                <p>Continue with Google</p>
            </div>
            </div>
            }
        </div>
    );
};

export default SignUpFirebase;