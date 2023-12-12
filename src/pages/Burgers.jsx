import { useState, useEffect } from "react";
import axios from "axios";
import  FoodCard from "../components/foodcard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "./Cart/cartAction"; 

const Burgers = () => {
  const [Food, setFood] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const resp = await axios.get("http://localhost:3000/foods/get");
      const responseData = resp.data.myData;
      setFood(responseData);
    } catch (e) {
      console.error("Error fetching data:", e);
    }
  };

  const cartHandler = (item) => {
    const cartItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.img,
      dec: item.description,
      //quantity: 1, 
    };

    dispatch(addToCart(cartItem));
    
  };

  return (
    <div className="main-contain">
      <h1 className="Food-heading"></h1>
      <div className="food-page w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5 ">

        
        {Food.map((item, index) => (
          <div key={index}>
            <FoodCard
            
              name={item.name}
              price={item.price}
             
              img={item.img}
              dec={item.description}
              CategoryName={item.CategoryName}
              id={item.id}
              
            />
            <Link to ="/cart">
            <button  class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => cartHandler(item)}>add to card</button></Link>

            
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Burgers;
