// components/Category.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Category = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:3000/foods/category');
        setCategories(response.data.myData);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-5">
      {/* Category box */}
      <div className="bg-gray-200 p-4 border rounded">
        <h2 className="text-lg font-bold mb-4">Categories</h2>
        <ul>
          {categories.map((category) => (
            <li key={category._id} className="mb-2">
              <Link
                to={`/Categories/${category.CategoryName}`}
                className="text-black-500 hover:text-blue-500 transition duration-300"
                onClick={() => onSelectCategory(category.CategoryName)}
                style={{ textDecoration: 'none' }}
              >
                {category.CategoryName}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      </div>
  
  );
};

export default Category;
