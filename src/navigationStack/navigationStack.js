import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginScreen from "../pages/login"
import RegistrationScreen from "../pages/register";
import ForgotPasswordScreen from "../pages/forgotPassword";
import InvalidScreen from "../pages/invalid";
import HomeScreen from "../pages/afterLoginRoutes/home";
import AboutScreen from "../pages/afterLoginRoutes/about";
import SettingScreen from "../pages/afterLoginRoutes/settings";
import ProductDetail from "../pages/afterLoginRoutes/productDetail";

const NavigationStack = () => {
    return (
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" Component={LoginScreen} />
          <Route path="/register" Component={RegistrationScreen} />
          <Route path="/forgot-password" Component={ForgotPasswordScreen} />
          <Route path="*" Component={InvalidScreen} /> */}

          <Route path="/" Component={HomeScreen} />
          <Route path="/about" Component={AboutScreen} />
          <Route path="/settings" Component={SettingScreen} />
          <Route path="*" Component={InvalidScreen} />
          <Route path="/product/:id/:id" Component={ProductDetail} />
        </Routes>
      </BrowserRouter>
    );
}
export default NavigationStack