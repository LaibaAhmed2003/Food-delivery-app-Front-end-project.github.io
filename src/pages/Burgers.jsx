import { useState, useEffect } from "react";
import axios from "axios";
import FoodCard from "../components/foodcard";

const Burgers = () => {
  const [Food, setFood] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const resp = await axios.get("http://localhost:3000/foods/get");
      const responseData = resp.data.myData;
      console.log(responseData);
      setFood(responseData);
    } catch (e) {
      console.error("Error fetching data:", e);
    }
  };

  const filterFood = () => {
    return Food.filter(
      (item) =>
        item.name && item.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  };

  const handleSearch = () => {
    // No need for the onSearch condition
    // You can perform search-related logic here if needed
  };

  const filteredFood = filterFood();

  return (
    <div className="main-contain">
      <div className="" style={{ textAlign: "center", padding: "24px" }}>
        <input
          className=""
          style={{
            border: "1px solid black",
            padding: "10px",
            borderRadius: "4px",
            width: "700px",
          }}
          type="text"
          placeholder="Search Food here..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      <h1 className="Food-heading"></h1>
      <div className="food-page w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5 ">
        {filteredFood.map((item) => (
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
  );
};

export default Burgers;
