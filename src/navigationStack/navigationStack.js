import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginScreen from "../pages/login"
import RegistrationScreen from "../pages/register";
import ForgotPasswordScreen from "../pages/forgotPassword";
import InvalidScreen from "../pages/invalid";

const NavigationStack = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={LoginScreen} />
          <Route path="/register" Component={RegistrationScreen} />
          <Route path="/forgot-password" Component={ForgotPasswordScreen} />
          <Route path="*" Component={InvalidScreen} />
        </Routes>
      </BrowserRouter>
    );
}
export default NavigationStack