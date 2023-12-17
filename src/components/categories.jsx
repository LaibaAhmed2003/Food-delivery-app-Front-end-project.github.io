import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Category = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/foods/category"
        );
        setCategories(response.data.myData);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="grid grid-cols-1 ">
      <div className="">
        <h2 className="category text-xxl font-bold ">Categories</h2>
        <ul>
          {categories.map((category) => (
            <li key={category._id}>
              <Link
                to={`/Categories/${category.CategoryName}`}
                className="text-black-500 category-heading"
                style={{ display: "flex" }}
                onClick={() => onSelectCategory(category.CategoryName)}
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
