import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Register from "../pages/auth/Auth";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register type="register" />}></Route>
        <Route path="/login" element={<Register type="login" />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
