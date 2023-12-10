import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Burgers from "./pages/Burgers";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />

        <Route path="/burgers" element={<Burgers />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
