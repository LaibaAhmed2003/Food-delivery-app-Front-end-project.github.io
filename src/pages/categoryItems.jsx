// CategoryItems.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
//import FoodCard from '../components/foodcard';
import { useParams } from "react-router-dom";

const CategoryItems = () => {
  const [categoryItems, setCategoryItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/foods/category/${categoryName}`
        );
        setCategoryItems(response.data.myData);
      } catch (error) {
        console.error("Error fetching category items:", error);
      }
    };

    fetchData();
  }, [categoryName]);

  return (
    <div className="container mx-auto mt-8">
      <h3 className="text-2xl font-bold mb-4">{categoryName}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categoryItems.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded p-4 border border-white-100"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-auto rounded-lg mb-2"
            />
            <h3 className="text-2xl font-bold mb-1">{item.name}</h3>
            <p className="text-xl font-bold mb-1">Rs. {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryItems;
