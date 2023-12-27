import React, { useState, useEffect } from "react";
import axios from "axios";
import FoodCard from "../components/foodcard";
import CategoryItems from "./categoryItems";
import { useParams } from "react-router-dom";

const Burgers = () => {
  const [food, setFood] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const { categoryName } = useParams();
  const [categories, setCategories] = useState([]);
  // const [selectedCategory, setSelectedCategory] = useState(categoryName);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/foods/get");
        setFood(response.data.myData);
      } catch (error) {
        console.error("Error fetching food data:", error);
      }
    };

    fetchData();
  }, []);

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

  const handleSelectCategory = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const filterFood = () => {
    const lowercasedSearchInput = searchInput.toLowerCase();

    if (selectedCategory === "all") {
      return food.filter(
        (item) =>
          item.CategoryName.toLowerCase().includes(lowercasedSearchInput) ||
          item.name.toLowerCase().includes(lowercasedSearchInput)
      );
    } else {
      return food
        .filter((item) => item.CategoryName === selectedCategory)
        .filter((item) =>
          item.name.toLowerCase().includes(lowercasedSearchInput)
        );
    }
  };
  return (
    <div
      className="main-contain"
      style={{
        marginTop: "7%",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-evenly",
      }}
    >
      <div className="grid grid-cols-1 gap-5">
        <div className="Category-container bg-gray-200 p-4 border rounded">
          <h2 className="">Categories</h2>
          <ul>
            <li key="all" className="mb-2">
              <button
                className="cat-button text-black-500  transition duration-300"
                onClick={() => handleSelectCategory("all")}
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                All
              </button>
            </li>
            {categories.map((category) => (
              <li key={category._id} className="mb-2">
                <button
                  className="cat-button text-black-500  transition duration-300"
                  onClick={() => handleSelectCategory(category.CategoryName)}
                  style={{ textDecoration: "none", cursor: "pointer" }}
                >
                  {category.CategoryName}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <div
          className=""
          style={{ textAlign: "center", padding: "24px", marginTop: "20px" }}
        >
          <input
            className="Menu-Searchbar"
            type="text"
            placeholder="Search Food here..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>

        <div className="food-page w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5 ">
          {filterFood().map((item) => (
            <div key={item._id}>
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
    </div>
  );
};

export default Burgers;
