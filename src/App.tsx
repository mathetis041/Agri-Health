import ChangePassword from "./onboarding/forgotPassword/changePassword";
import ForgotPassword from "./onboarding/forgotPassword/forgotPassword";
import Homepage from "./pages/homepage/homepage";
import Login from "./onboarding/logIn/login";
import Otp from "./onboarding/otp/otp";
import SignUp from "./onboarding/signUp/signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/changepassword" element={<ChangePassword />} />
      </Routes>
    </Router>
  );
}

export default App;
