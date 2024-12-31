import { Route, Routes, useLocation } from "react-router-dom";
import Admin from "./pages/Admin.jsx";
import Home from "./pages/Home.jsx";

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
    </>
  );
};

export default App;
