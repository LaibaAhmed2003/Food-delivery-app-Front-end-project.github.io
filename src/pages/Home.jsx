import axios from "axios";
import PopularItem from "../components/PopularItem";
import { useEffect, useState } from "react";
import home from "../components/Images/home-img.png";
import step1 from "../components/Images/step-1.jpg";
import step2 from "../components/Images/step-2.jpg";
import step3 from "../components/Images/step-3.jpg";
import step4 from "../components/Images/step-4.jpg";

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
    <div>
      <div className="home">
        <div className="content">
          <h3>food made with love</h3>
          <p>
            Welcome to FoodFest, where culinary delight meets a feast for the
            senses! We are thrilled to extend a warm invitation to all
            discerning buyers seeking a gastronomic adventure like no
            other.Prepare to embark on a journey through a diverse array of
            flavors, textures, and aromas that promise to tantalize your taste
            buds and leave you craving for more.
          </p>
          <a className="btnn" href="/burgers">
            Order Now
          </a>
        </div>
        <div className="image">
          <img src={home} alt="" />
        </div>
      </div>

      <h2
        style={{
          fontWeight: "bold",
          fontSize: "32px",
          marginLeft: "74px",
          marginTop: "10px",
        }}
      >
        Popular Items
      </h2>

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
            id={item._id}
          />
        ))}
      </section>
      <div className="w-full flex justify-center">
        <section className="steps">
          <div className="box">
            <img src={step1} alt="" />
            <h3>choose your favorite food</h3>
          </div>
          <div className="box">
            <img src={step2} alt="" />
            <h3>free and fast delivery</h3>
          </div>
          <div className="box">
            <img src={step3} alt="" />
            <h3>easy payments methods</h3>
          </div>
          <div className="box">
            <img src={step4} alt="" />
            <h3>and finally, enjoy your food</h3>
          </div>
        </section>
      </div>
      <br />
    </div>
  );
};

export default Home;
