import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { removeFromCart } from "./cartAction";
import { useDispatch, useSelector } from "react-redux";
import CartAmountToggle from "./cartAmountToggle";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const [amounts, setAmounts] = useState({});
  const shippingCost = cart.length === 0 ? 0 : 200;

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    dispatch({ type: "SET_CART", payload: storedCart });
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const initialAmounts = { ...amounts }; // Copy the existing amounts

    cart.forEach((item) => {
      if (!(item.id in initialAmounts)) {
        initialAmounts[item.id] = 1;
      }
    });

    setAmounts(initialAmounts);
  }, [cart, amounts]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    dispatch({ type: "SET_CART", payload: storedCart });
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    dispatch({ type: "SET_CART", payload: storedCart });
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const setDecrease = (id) => {
    setAmounts((prevAmounts) => ({
      ...prevAmounts,
      [id]: prevAmounts[id] > 1 ? prevAmounts[id] - 1 : 1,
    }));
  };

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    dispatch({ type: "SET_CART", payload: storedCart });
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const setIncrease = (id) => {
    setAmounts((prevAmounts) => ({
      ...prevAmounts,
      [id]: prevAmounts[id] < 10 ? prevAmounts[id] + 1 : 10,
    }));
  };

  const calculateSubtotal = () => {
    return cart.reduce((acc, item) => acc + item.price * amounts[item.id], 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    return subtotal + shippingCost;
  };

  const totalPrice = calculateTotal();

  return (
    <div style={{ marginTop: "6%" }}>
      <div className="bg-[#faf9f9]">
        <section className="container mx-auto p-4 sm:p-8">
          <div className="flex flex-col sm:flex-row justify-between text-2xl mb-4 sm:mb-8">
            <h1>Food Shopping Cart</h1>
            <p className="underline text-lg hover:cursor-pointer text-center sm:text-right">
              {cart.length > 0 ? (
                <span>You have {cart.length} items in the shopping cart</span>
              ) : (
                <span>Your cart is empty</span>
              )}
            </p>
          </div>
          {cart.length > 0 ? (
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex w-full h-auto items-center p-4 rounded-md shadow-sm">
                <div className="flex-1">
                  {cart.map((item, index) => (
                    <div className="cart-page flex mb-4" key={index}>
                      <img
                        className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300 mix-blend-multiply"
                        src={item.image}
                        alt=""
                      />
                      {/* <div className="flex flex-col ml-4 w-full"> */}
                      <h2 className="cart-product-title text-lg sm:text-xl">
                        {item.name} ({amounts[item.id]}x)
                      </h2>
                      {/* <h3>{item.name}</h3> */}

                      <h2 className="cart-product-title text-lg sm:text-xl">
                        {item.title}
                      </h2>

                      <p className="text-[green]">{item.price} Rs</p>

                      <CartAmountToggle
                        itemId={item.id}
                        amount={amounts[item.id]}
                        setIncrease={() => setIncrease(item.id)}
                        setDecrease={() => setDecrease(item.id)}
                      />
                      <div className="remove-item cursor-pointer mt-2 sm:mt-0">
                        <FontAwesomeIcon
                          icon={faTrash}
                          className="text-red-500"
                          onClick={() => removeItemFromCart(item.id)}
                        />
                      </div>
                      {/* </div> */}
                      <hr />
                    </div>
                  ))}
                </div>
                <div className="w-full sm:w-[25%] border-2 border-[white-400] rounded-md shadow-md p-6 bg-[white]">
                  <div className="summary">
                    <h1 className="text-2xl text-center mb-4">Summary</h1>
                    {cart.map((item) => (
                      <div key={item.id} className="flex justify-between mb-2">
                        <p>
                          {item.name} ({amounts[item.id]}x)
                        </p>
                        <p>{item.price * amounts[item.id]} Rs</p>
                      </div>
                    ))}
                    <div className="flex justify-between mb-4">
                      <p>Subtotal</p>
                      <p>{calculateSubtotal()} Rs</p>
                    </div>
                    <div className="flex justify-between mb-4">
                      <p>Shipping</p>
                      <p>{shippingCost} Rs</p>
                    </div>
                    <div className="flex justify-between text-2xl mb-4">
                      <p>Total</p>
                      <p>{calculateTotal()} Rs</p>
                    </div>
                    <button>
                      <Link to="/checkout">
                        <button className="btnn mx-5">CHECKOUT</button>
                      </Link>
                      {/* <Link to={`/checkout?totalPrice=${totalPrice}`}>
                        <button className="btnn mx-5">CHECKOUT</button>
                      </Link> */}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="text-center text-xl"
              style={{
                height: "400px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src="https://www.ruuhbythebrandstore.com/images/cart_is_empty.png"
                alt="cart image"
                style={{ width: "300px", height: "250px" }}
              />
              <Link
                to="/burgers"
                style={{
                  backgroundColor: "Brown",
                  color: "white",
                  padding: "6px 22px",
                  marginTop: "10px",
                  borderRadius: "4px",
                }}
              >
                Browse Products
              </Link>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Cart;
