import './App.css';
import Homepage from './components/Homepage/Homepage';
import SignInForm from './components/SignInForm/SignInForm';
import SignUpForm from './components/SignUpForm/SignUpForm';


function App() {
  return (
    <div className="App">
      <SignUpForm></SignUpForm>
      {/* <Homepage></Homepage> */}
    </div>
  );
}

export default App;
