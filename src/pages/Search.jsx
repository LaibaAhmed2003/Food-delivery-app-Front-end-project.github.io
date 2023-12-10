import { useState, useEffect } from 'react';
import FoodCard from '../components/foodcard';

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
 

  useEffect(() => {
    getData();
  }, []);

  
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


export default Search;