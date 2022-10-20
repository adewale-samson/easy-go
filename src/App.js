
import './App.css';
import Nav from './Components/Nav/Nav';
import ContactUs from './Pages/ContactUs/ContactUs';
import Login from './Pages/Login/Login';
import SelectPlan from './Pages/SelectPlan/SelectPlan';
import SignUp from './Pages/SignUp/SignUp'
import { Route, Routes} from 'react-router-dom'
import LandingPage from './Pages/LandingPage/LandingPage';
import Footer from './Components/Footer/Footer'


function App() {
  return (
    <div>
      {/* <Footer /> */}
      {/* <SelectPlan/> */}
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <Nav /> */}
      <LandingPage />
       {/* <Routes>
        <Route path='/' element={<SelectPlan/>} />
      <Route path='/ContactUs' element={<ContactUs />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/SignUp' element={<SignUp />} />
      </Routes>  */}
    </div>
  );
}

export default App;
