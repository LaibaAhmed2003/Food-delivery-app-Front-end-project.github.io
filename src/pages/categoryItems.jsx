// CategoryItems.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FoodCard from '../components/foodcard';
import { useParams } from 'react-router-dom';

const CategoryItems = () => {
  const [categoryItems, setCategoryItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/foods/category/${categoryName}`);
        setCategoryItems(response.data.myData);
      } catch (error) {
        console.error('Error fetching category items:', error);
      }
    };

    fetchData();
  }, [categoryName]);

  return (
    <div className="container mx-auto mt-8">
      <h3 className="text-2xl font-bold mb-4">Category Items for ID: {categoryName}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categoryItems.map((item) => (
          <div key={item._id} className="bg-white rounded p-4 shadow">
            <FoodCard
              name={item.name}
              price={item.price}
              img={item.img}
              dec={item.description}
              CategoryName={item.CategoryName}
              id={item._id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryItems;
