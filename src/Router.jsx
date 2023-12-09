import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
