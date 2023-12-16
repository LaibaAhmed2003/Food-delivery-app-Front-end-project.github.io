import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "./Cart/cartAction";

const PopularDetail = () => {
  const [foodDetail, setFoodDetail] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const response = await axios.get(
            `http://localhost:3000/foods/getpopular/${id}`
          );
          setFoodDetail(response.data.myData);
        } else {
          console.error("Invalid id:", id);
        }
      } catch (error) {
        console.error("Error fetching food detail:", error);
        setFoodDetail(null); // Set to null in case of an error
      }
    };

    fetchData();
  }, [id]);

  if (!foodDetail) {
    return <div>Loading...</div>;
  }

  const cartHandler = () => {
    const cartItem = {
      id: foodDetail._id,
      name: foodDetail.name,
      price: foodDetail.price,
      image: foodDetail.img,
      dec: foodDetail.description,
    };
    dispatch(addToCart(cartItem));
  };
  return (
    <div className="food-detail food-page w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5 ">
      <img src={foodDetail.img} alt={foodDetail.name} />
      <div className="detail">
        <h2>{foodDetail.name}</h2>
        <p>Price: ${foodDetail.price}</p>
        <p>{foodDetail.description}</p>
        <Link to="/cart">
          <button
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={() => cartHandler()}
          >
            add to card
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PopularDetail;