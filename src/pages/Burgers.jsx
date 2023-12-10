import { useState, useEffect } from 'react';
import axios from 'axios';
import FoodCard from '../components/foodcard';

const Burgers = () => {
  const [Food, setFood] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  console.log(Food);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const resp = await axios.get('http://localhost:3000/foods/get');
      const responseData = resp.data.myData;

      if (Array.isArray(responseData)) {
        setFood(responseData);
      } else {
        console.error("Invalid data format. Expected an array.");
      }
    } catch (e) {
      console.error("Error fetching data:", e);
    }
  };
  const filteredFood = Food.filter(item =>
    item.title && item.title.toLowerCase().includes(searchInput.toLowerCase())
  );
  

  return (
    <div className='main-contain'>
      <h1 className='Food-heading'>FOOD_ITEMS</h1>
      <div>
        <input
          type="text"
          placeholder="Search Food"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      <div className='food-page'>
        {filteredFood.map((item, index) => (
          <FoodCard
            key={index}
            name={item.title}
            price={item.price}
            category={item.category}
            image={item.image}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};


export default Burgers;