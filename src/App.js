import "./App.css";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Login from "./Pages/Login/Login";
import SelectPlan from "./Pages/SelectPlan/SelectPlan";
import SignUp from "./Pages/SignUp/SignUp";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import ActivateAccount from "./Pages/ActivateAccount/ActivateAccount";
import Profile from "./Pages/Profile/Profile";
import AddAddress from './Pages/AddAddress/AddAddress'
import Dashboard from "./Pages/Dashboard/Dashboard";
import Nav from "./Components/Nav/Nav";

function App() {
  return (
    <div>
      {/* <Nav /> */}
      {/* <LandingPage /> */}
      {/* <Dashboard /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="SelectPlan" element={<SelectPlan />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path='/Activate' element={<ActivateAccount />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/AddAddress' element={<AddAddress />} />
      </Routes>
      
    </div>
  );
}

export default App;
