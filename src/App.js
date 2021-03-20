import './App.css';
import Homepage from './components/Homepage/Homepage';
import SignInForm from './components/SignInForm/SignInForm';
import SignUpForm from './components/SignUpForm/SignUpForm';
import LocationSelector from './components/LocationSelector/LocationSelector'

function App() {
  return (
    <div className="App">
      <LocationSelector></LocationSelector>
    </div>
  );
}

export default App;
