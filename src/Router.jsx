import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Search from "./pages/Search";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
     

      <Route path="/search" element={<Search />} />

      </Routes>
    </BrowserRouter>
  );
};
export default Router;
