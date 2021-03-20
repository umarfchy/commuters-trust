import './App.css';
import Homepage from './components/Homepage/Homepage';
import SignInForm from './components/SignInForm/SignInForm';
import SignUpForm from './components/SignUpForm/SignUpForm';
import LocationSelector from './components/LocationSelector/LocationSelector'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config'
import { createContext, useContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from './components/Navigation/Navigation';

firebase.initializeApp(firebaseConfig);

function App() {
  const provider = new firebase.auth.GoogleAuthProvider();
  const [user, setUser] = useState({
          isSignedIn: false,  
          name: '',
          email: '',
          picture: ''
  })

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

  const UserContext = createContext();
  return (
    <div className="App">
      {/* {user.isSignedIn ?
      <div>
        <h3> Name: { user.name} </h3>
        <p> Email: {user.email} </p>
        <button onClick={handleSignOut}> Sign out </button>
      </div> :
       <button onClick={handleSignIn}>
       Sign In
     </button> } */}
      
    {/* <UserContext.Provider> */}
     <Router>
        <Switch>
          <Route exact path='/'>
            <Homepage></Homepage>
          </Route>
          <Route path='/random'>
          <Navigation></Navigation>
          <SignInForm></SignInForm>
          </Route>
          <Route path='/*'>
          </Route>
        </Switch>
      </Router>
      {/* </UserContext.Provider> */}
    </div>
  );
}

export default App;
