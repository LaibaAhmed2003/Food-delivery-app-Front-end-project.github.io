import axios from "axios";
import PopularItem from "../components/PopularItem";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [food, setFood] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/foods/popular");
      const data = response.data.myData;
      console.log(data);
      setFood(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="fit">
        <a className="Order-btn" href="/burgers">
          Order Now
        </a>
      </div>
      <div className="text-center p-10">
        <h1 className="font-bold text-4xl mb-4">Popular Food</h1>
        {/* <h1 className="text-3xl"></h1> */}
      </div>

      <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {/* <PopularItem/> */}
        {food.map((item, index) => (
          <PopularItem
            key={index}
            name={item.name}
            price={item.price}
            category={item.CategoryName}
            img={item.img}
            dec={item.description}
            id={item.id}
          />
        ))}
      </section>
      <div className="w-full flex justify-center">
        <NavLink to="/burgers">
          <a className=" text-blue-700 ">Show More</a>
        </NavLink>
      </div>
      <br />
    </>
  );
};

export default Home;
