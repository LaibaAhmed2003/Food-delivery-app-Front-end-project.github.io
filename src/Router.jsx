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
import BurgersDetail from "./pages/BurgerDetail";
import Footer from "./components/footer";
import ContactForm from "./pages/Contact";
import OurStory from "./pages/Ourstory";
//import Category from "./components/categories";
import CategoryItems from "./pages/categoryItems";
import PopularDetail from "./pages/populardetails";

const Router = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/" element={<Home />} />
            <Route path="/burgers" element={<Burgers />} />
            <Route
              path="/Categories/:categoryName"
              element={<CategoryItems />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/burgerdetail/:id" element={<BurgersDetail />} />
            <Route path="/populardetail/:id" element={<PopularDetail />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/ourstory" element={<OurStory />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};
export default Router;
