
import './App.css';
import Nav from './Components/Nav/Nav';
import ContactUs from './Pages/ContactUs/ContactUs';
import Login from './Pages/Login/Login';
import SelectPlan from './Pages/SelectPlan/SelectPlan';
import SignUp from './Pages/SignUp/SignUp'
import { Route, Routes} from 'react-router-dom'


function App() {
  return (
    <div>
      {/* <SelectPlan/>
      <Login />
      <SignUp /> */}
      {/* <Nav /> */}
       <Routes>
        <Route path='/' element={<SelectPlan/>} />
      <Route path='/ContactUs' element={<ContactUs />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/SignUp' element={<SignUp />} />
      </Routes> 
    </div>
  );
}

export default App;
