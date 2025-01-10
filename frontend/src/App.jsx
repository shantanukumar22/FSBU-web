import { Route, Routes, useLocation } from "react-router-dom";
import Admin from "./pages/Admin.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Auth/Login.jsx";

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/club" element={<Admin />} />
      <Route path="/club/login" element={<Login />} />
    </Routes>
    </>
  );
};

export default App;
