import { useState, useEffect } from "react";
import axios from "axios";
import FoodCard from "../components/foodcard";
import Category from "../components/categories";
import { useParams } from "react-router-dom";

const Burgers = () => {
  const [Food, setFood] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const { categoryName } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(categoryName);
  console.log(selectedCategory);

  useEffect(() => {
    getData();
  }, [selectedCategory]); // Add selectedCategory as a dependency to refetch data when category changes

  const handleSelectCategory = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const getData = async () => {
    try {
      let url = "http://localhost:3000/foods/get";

      // If a category is selected, modify the URL to fetch foods of that category
      if (selectedCategory) {
        url += `/category/${selectedCategory}`;
      }

      const resp = await axios.get(url);
      const responseData = resp.data.myData;
      setFood(responseData);
    } catch (e) {
      console.error("Error fetching data:", e);
    }
  };

  const filterFood = () => {
    return Food.filter(
      (item) =>
        item.name &&
        item.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  };

  const filteredFood = filterFood();

  return (
    <div className="main-contain">
      <Category onSelectCategory={handleSelectCategory} />
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
