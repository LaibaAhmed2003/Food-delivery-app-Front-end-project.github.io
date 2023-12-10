import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Burgers from "./pages/Burgers";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Cart from "./pages/Cart/cart";
import store from "./pages/Cart/Store";
import { Provider } from "react-redux";
import Checkout from "./pages/Checkout";
import BurgersDetail from "./pages/BurgerDetail"
import Search from "./pages/Search";


const Router = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/burgers" element={<Burgers />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/burger-detail/:id" element={<BurgersDetail />} />
          <Route path="/search" element={<Search/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
export default Router;
