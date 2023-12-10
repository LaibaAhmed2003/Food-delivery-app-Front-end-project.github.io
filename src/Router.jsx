import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
//import Burger from "./pages/Burgers";



const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
       
              </Routes>
    </BrowserRouter>
  );
};
export default Router;
