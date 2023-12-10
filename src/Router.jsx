import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Burgers from "./pages/Burgers";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/burgers" element={<Burgers />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
