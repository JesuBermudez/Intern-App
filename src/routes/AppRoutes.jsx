import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Register from "../pages/auth/Auth";
import Main from "../pages/main/Main";
import FilePages from "../pages/files/Files";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register type="register" />}></Route>
        <Route path="/login" element={<Register type="login" />}></Route>
        <Route path="/main" element={<Main></Main>}></Route>
        <Route path="/files" element={<FilePages></FilePages>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
