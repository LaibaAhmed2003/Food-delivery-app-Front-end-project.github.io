import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Burgers from "./pages/Burgers";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Search from "./pages/Search";


const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/search" element={<Search />} />
        <Route path="/burgers" element={<Burgers />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
