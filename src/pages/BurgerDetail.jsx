import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const FoodDetail = () => {
  const [foodDetail, setFoodDetail] = useState(null);
  const { id } = useParams();
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
  return (
    <div className="food-detail w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5 ">
      <img src={foodDetail.img} alt={foodDetail.name} />
      <div className="details">
        <h2>{foodDetail.name}</h2>
        <p>Price: ${foodDetail.price}</p>
      </div>
    </div>
  );
};

export default FoodDetail;
