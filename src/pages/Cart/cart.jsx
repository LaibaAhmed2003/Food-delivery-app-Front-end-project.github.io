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

  // const setDecrease = (id) => {
  //   setAmounts((prevAmounts) => ({
  //     ...prevAmounts,
  //     [id]: prevAmounts[id] > 1 ? prevAmounts[id] - 1 : 1,
  //   }));
  // };

  // const setIncrease = (id) => {
  //   setAmounts((prevAmounts) => ({
  //     ...prevAmounts,
  //     [id]: prevAmounts[id] < 10 ? prevAmounts[id] + 1 : 10,
  //   }));
  // };
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
      <section>
        <div className="flex justify-between text-2xl p-5 mx-10 ">
          <h1>Food Shopping Cart</h1>
          <p className="underline text-lg hover:cursor-pointer text-center mr-12">
            You have <span className="text-blue-500">{cart.length}</span> items
            in the shopping cart
          </p>
        </div>
        <div className="flex ml-4 mr-4 gap-4 mx-10">
          <div className="flex flex-col flex-1 w-[60%]">
            {cart.map((item, index) => (
              <div className="" key={index}>
                <div className="flex w-[100%] h-auto items-center p-4 rounded-md shadow-sm ">
                  <img
                    className="w-[7.3rem] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300 mix-blend-multiply"
                    src={item.image}
                    alt=""
                  />
                  <div className="flex gap-40 ml-5 h-auto justify-between ">
                    <div className="flex flex-col">
                      <h2 className="cart-product-title text-xl">
                        {item.title}
                      </h2>
                      <p className="text-[green]">Price: {item.price} Rs</p>
                      <h3>Category: {item.name}</h3>
                    </div>
                    {/* <CartAmountToggle
                      amount={amounts[item.id]}
                      setIncrease={() => setIncrease(item.id)}
                      setDecrease={() => setDecrease(item.id)}
                    /> */}
                    <CartAmountToggle
                      itemId={item.id}
                      amount={amounts[item.id]}
                      setIncrease={() => setIncrease(item.id)}
                      setDecrease={() => setDecrease(item.id)}
                    />
                    <div className="remove-item cursor-pointer">
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="text-red-500"
                        onClick={() => removeItemFromCart(item.id)}
                      />
                    </div>
                  </div>
                </div>
                <hr className="cart-hr" />
              </div>
            ))}
          </div>
          <div className="flex-[0.4] w-auto h-[40vh] border-2 border-[white-400] rounded-md shadow-md p-6 mx-10 bg-[white]">
            <h1 className="text-[2rem] text-center">Summary</h1>
            <div className="flex justify-between mt-3 w-[100%]">
              <p>Subtotal</p>
              <p>{calculateSubtotal()} Rs</p>
            </div>
            <div className="flex justify-between mt-3 w-[100%]">
              <p>Shipping</p>
              <p>{200} Rs</p>
            </div>
            <div className="flex justify-between text-2xl mt-3 w-[100%]">
              <p>Total</p>
              <p>{calculateTotal()} Rs</p>
            </div>
            <button>
              <Link to="/checkout">
                <button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                  CHECKOUT
                </button>
              </Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Cart;
