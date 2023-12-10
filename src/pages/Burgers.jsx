import { useState, useEffect } from "react";
import axios from "axios";
import FoodCard from "../components/foodcard";

const Burgers = () => {
  const [Food, setFood] = useState([]);
  //const [searchInput, setSearchInput] = useState("");
  // console.log(Food[0].name);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const resp = await axios.get("http://localhost:3000/foods/get");
      // console.log(resp);
      const responseData = resp.data.myData;
      console.log(responseData);
      setFood(responseData);
      // if (Array.isArray(responseData)) {
      // } else {
      //   console.error("Invalid data format. Expected an array.");
      // }
    } catch (e) {
      console.error("Error fetching data:", e);
    }
  };
  //const filteredFood = Food.filter(
    //(item) =>
      //item.name && item.name.toLowerCase().includes(searchInput.toLowerCase())
  // );



  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
      }}
      className="main-contain"
    >
      <h1
        style={{
          fontSize: "2rem",
          color: "#333",
          marginBottom: "20px",
        }}
        className="Food-heading"
      >
        FOOD_ITEMS
      </h1>
      <div className="food-page w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {Food.map((item, index) => (
          <FoodCard
            key={index}
            name={item.name}
            price={item.price}
            category={item.CategoryName}
            img={item.img}
            dec={item.description}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Burgers;
