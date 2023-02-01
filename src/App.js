import "./App.css";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Login from "./Pages/Login/Login";
import SelectPlan from "./Pages/SelectPlan/SelectPlan";
import SignUp from "./Pages/SignUp/SignUp";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import ActivateAccount from "./Pages/ActivateAccount/ActivateAccount";
import Profile from "./Pages/Profile/Profile";
import AddAddress from "./Pages/AddAddress/AddAddress";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Nav from "./Components/Nav/Nav";
import SelectModal from "./Components/SelectModal/SelectModal";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/SelectPlan"
            element={
              <ProtectedRoute>
                <SelectPlan />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ContactUs"
            element={
              <ProtectedRoute>
                <ContactUs />
              </ProtectedRoute>
            }
          />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route
            path="/Activate"
            element={
              <ProtectedRoute>
                <ActivateAccount />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/AddAddress"
            element={
              <ProtectedRoute>
                <AddAddress />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
