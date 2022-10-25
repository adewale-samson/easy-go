import "./App.css";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Login from "./Pages/Login/Login";
import SelectPlan from "./Pages/SelectPlan/SelectPlan";
import SignUp from "./Pages/SignUp/SignUp";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import ActivateAccount from "./Pages/ActivateAccount/ActivateAccount";
import Profile from "./Components/Profile/Profile";

function App() {
  return (
    <div>
      <Profile />
      {/* <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="SelectPlan" element={<SelectPlan />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path='/Activate' element={<ActivateAccount />} />
      </Routes> */}
      
    </div>
  );
}

export default App;
