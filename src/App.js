
import './App.css';
import Nav from './Components/Nav/Nav';
import ContactUs from './Pages/ContactUs/ContactUs';
import Login from './Pages/Login/Login';
import SelectPlan from './Pages/SelectPlan/SelectPlan';
import SignUp from './Pages/SignUp/SignUp'


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <SelectPlan />
      <ContactUs />
      <Nav />
      <Login />
      <SignUp />
    </div>
  );
}

export default App;
