import { Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Auth/Login.jsx";
import TeamSection from "./components/TeamSection.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/teams" element={<TeamSection />} />
        <Route path="/" element={<Home />} />
        <Route path="/club" element={<Admin />} />
        <Route path="/club/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
