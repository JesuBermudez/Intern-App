import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
