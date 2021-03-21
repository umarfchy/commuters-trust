import './App.css';
import Homepage from './components/Homepage/Homepage';
import SignInForm from './components/SignInForm/SignInForm';
import SignUpForm from './components/SignUpForm/SignUpForm';
import LocationSelector from './components/LocationSelector/LocationSelector'
import { createContext, useContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from './components/Navigation/Navigation';
import SignUpFirebase from './components/SignUpFirebase/SignUpFirebase';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();



function App() {
  const [user, setUser] = useState({});
  const [ride, setRide] = useState('');

  return (
    <div className="App">      
    <UserContext.Provider value= {[user, setUser, ride, setRide]}>
     <Router>
        <Switch>
          <Route exact path='/'>
            <Navigation></Navigation>
            <Homepage></Homepage>
          </Route>
          <Route path='/signup'>
            <SignUpForm></SignUpForm>
            <SignUpFirebase></SignUpFirebase>
          </Route>
          <Route path='/signin'>
          <SignInForm></SignInForm>
          <SignUpFirebase></SignUpFirebase>
          </Route>
          <PrivateRoute path='/location'>
            <Navigation></Navigation>
            <LocationSelector></LocationSelector>
          </PrivateRoute>
          <Route path='/*'>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
