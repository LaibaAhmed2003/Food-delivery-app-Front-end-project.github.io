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
  const [amounts, setAmounts] = useState({}); // State to store item quantities

  useEffect(() => {
    // Initialize quantities based on the items in the cart
    const initialAmounts = {};
    cart.forEach((item) => {
      initialAmounts[item.id] = 1;
    });
    setAmounts(initialAmounts);
  }, [cart]);

  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const setDecrease = (id) => {
    setAmounts((prevAmounts) => ({
      ...prevAmounts,
      [id]: prevAmounts[id] > 1 ? prevAmounts[id] - 1 : 1,
    }));
  };

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
    const shippingCost = 200; // Fixed shipping cost, replace with actual logic
    return subtotal + shippingCost;
  };

  return (
    <div className="bg-[#faf9f9]">
      <section className="container mx-auto p-4 sm:p-8">
        <div className="flex flex-col sm:flex-row justify-between text-2xl mb-4 sm:mb-8">
          <h1>Food Shopping Cart</h1>
          <p className="underline text-lg hover:cursor-pointer text-center sm:text-right">
            You have <span className="text-blue-500">{cart.length}</span> items
            in the shopping cart
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            {cart.map((item, index) => (
              <div className="mb-4" key={index}>
                <div className="flex w-full h-auto items-center p-4 rounded-md shadow-sm">
                  <img
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300 mix-blend-multiply"
                    src={item.image}
                    alt=""
                  />
                  <div className="flex flex-col ml-4 w-full">
                    <h2 className="cart-product-title text-lg sm:text-xl">
                      {item.title}
                    </h2>
                    <p className="text-[green]">Price: {item.price} Rs</p>
                    <h3>Category: {item.name}</h3>
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
                  </div>
                </div>
                <hr className="cart-hr mt-2" />
              </div>
            ))}
          </div>
          <div className="w-full sm:w-[25%] border-2 border-[white-400] rounded-md shadow-md p-6 bg-[white]">
            <div className="summary">
              <h1 className="text-2xl text-center mb-4">Summary</h1>
              <div className="flex justify-between mb-4">
                <p>Subtotal</p>
                <p>{calculateSubtotal()} Rs</p>
              </div>
              <div className="flex justify-between mb-4">
                <p>Shipping</p>
                <p>{200} Rs</p>
              </div>
              <div className="flex justify-between text-2xl mb-4">
                <p>Total</p>
                <p>{calculateTotal()} Rs</p>
              </div>
              <button>
                <Link to="/checkout">
                  <button className="btnn mx-5">CHECKOUT</button>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;