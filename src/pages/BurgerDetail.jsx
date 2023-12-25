import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "./Cart/cartAction";

const FoodDetail = () => {
  const [foodDetail, setFoodDetail] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const response = await axios.get(
            `http://localhost:3000/foods/getfood/${id}`
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
    <div style={{ marginTop: "5%" }}>
      <div className="food-detail food-page w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5 ">
        <img src={foodDetail.img} alt={foodDetail.name} />
        <div className="detail">
          <h2>{foodDetail.name}</h2>

          <div className="flex items-center">
            <p className="price text-lg font-semibold text-black cursor-auto my-3">
              Rs{foodDetail.price}
            </p>
            <del>
              <p className="text-sm text-gray-600 cursor-auto ml-2">Rs199</p>
            </del>
          </div>

          <p>{foodDetail.description}</p>

          <Link to="/cart">
            <button className="btnn" onClick={() => cartHandler()}>
              Add To Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodDetail;
