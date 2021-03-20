import './App.css';
import Homepage from './components/Homepage/Homepage';
import SignInForm from './components/SignInForm/SignInForm';
import SignUpForm from './components/SignUpForm/SignUpForm';
import LocationSelector from './components/LocationSelector/LocationSelector'
import { createContext, useContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from './components/Navigation/Navigation';
import SignUpFirebase from './components/SignUpFirebase/SignUpFirebase';

export const UserContext = createContext();



function App() {
  const [user, setUser] = useState({});


  return (
    <div className="App">      
    <UserContext.Provider value= {[user, setUser]}>
     <Router>
        <Switch>
          <Route exact path='/'>
            <Homepage></Homepage>
          </Route>
          <Route path='/signin'>
          <SignUpFirebase></SignUpFirebase>
          </Route>
          <Route path='/location'>
            <LocationSelector></LocationSelector>
          </Route>
          <Route path='/*'>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
