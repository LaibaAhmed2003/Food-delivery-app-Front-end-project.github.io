import axios from "axios";
import PopularItem from "../components/PopularItem";
import { useEffect, useState } from "react";
import home from "../components/Images/home-img.png";
import step1 from "../components/Images/step-1.jpg";
import step2 from "../components/Images/step-2.jpg";
import step3 from "../components/Images/step-3.jpg";
import step4 from "../components/Images/step-4.jpg";
import homebg from "../components/Images/home-bg.jpg";
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
      <div
        className="home"
        style={{
          backgroundImage: `url(${homebg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
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
        className="heading"
        // style={{
        //   fontWeight: "bold",
        //   fontSize: "32px",
        //   marginLeft: "74px",
        //   marginTop: "10px",
        // }}
      >
        Popular <span>Items</span>
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

      <section className="speciality" id="speciality">
        <h1 className="heading">
          Our <span>speciality</span>
        </h1>
        <div className="box-container">
          <div className="box">
            <img
              className="image"
              src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVyZ2VyfGVufDB8fDB8fHww"
              alt=""
            />
            <div className="content">
              <h3>tasty burger</h3>
              <p>
                Its juicy, its fiery, its fantastic. White piece chicken
                marinated, breaded fresh on site and then fried to a perfect
                juicy crunch.
              </p>
            </div>
          </div>
          <div className="box">
            <img
              className="image"
              src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
            <div className="content">
              <img src="s-2.png" alt="" />
              <h3>Zinger Burger</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident iure esse sunt enim dolorem et ut in maxime veritatis
                recusandae?
              </p>
            </div>
          </div>
          <div className="box">
            <img
              className="image"
              src="https://www.finedininglovers.com/sites/g/files/xknfdk626/files/2022-05/Popl_burger.jpg"
              alt=""
            />
            <div className="content">
              <img src="s-3.png" alt="" />
              <h3>HamBurger</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident iure esse sunt enim dolorem et ut in maxime veritatis
                recusandae?
              </p>
            </div>
          </div>
          <div className="box">
            <img
              className="image"
              src="https://www.finedininglovers.com/sites/g/files/xknfdk626/files/2022-05/Turkey_burger.jpg"
              alt=""
            />
            <div className="content">
              <img src="s-4.png" alt="" />
              <h3>Turkey Burger</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident iure esse sunt enim dolorem et ut in maxime veritatis
                recusandae?
              </p>
            </div>
          </div>
          <div className="box">
            <img
              className="image"
              src="https://www.finedininglovers.com/sites/g/files/xknfdk626/files/2022-05/burger_0.jpg"
              alt=""
            />
            <div className="content">
              <img src="s-5.png" alt="" />
              <h3>Beyond Meat Burger</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident iure esse sunt enim dolorem et ut in maxime veritatis
                recusandae?
              </p>
            </div>
          </div>
          <div className="box">
            <img
              className="image"
              src="https://www.finedininglovers.com/sites/g/files/xknfdk626/files/2022-05/chickpea_burger.jpg"
              alt=""
            />
            <div className="content">
              <h3>Bean Burger</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident iure esse sunt enim dolorem et ut in maxime veritatis
                recusandae?
              </p>
            </div>
          </div>
        </div>
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
