import { Route, Routes } from "react-router-dom";
import HomeScreen from "../../pages/afterLoginRoutes/home";
import AboutScreen from "../../pages/afterLoginRoutes/about";
import SettingScreen from "../../pages/afterLoginRoutes/settings";
import InvalidScreen from "../../pages/invalid";
import ProductDetail from "../../pages/afterLoginRoutes/productDetail";

const PostLoginRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/home" Component={HomeScreen} />
        <Route path="/about" Component={AboutScreen} />
        <Route path="/settings" Component={SettingScreen} />
        {/* <Route path="*" Component={InvalidScreen} /> */}
        <Route path="/product/:id/:id" Component={ProductDetail} />
      </Routes>
    </>
  );
};
export default PostLoginRoutes;
