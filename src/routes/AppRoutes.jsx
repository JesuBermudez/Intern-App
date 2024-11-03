import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Auth from "../pages/auth/Auth";
import Modal from "../components/ui/Modal";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Auth type="register" />}></Route>
        <Route path="/login" element={<Auth type="login" />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
