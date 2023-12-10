
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import FoodCard from "../components/foodcard"

const SearchBar = ({ onSearch }) => {
  const [food, setFood] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/foods/get');
      const data = response.data.myData;
      setFood(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const filterFood = () => {
    return food.filter(
      (item) => item.name && item.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchInput);
    }
  };

  const filteredFood = filterFood();

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        style={{
          width: '100%',
          maxWidth: '400px',
          height: '40px',
          margin: '0 auto',
          padding: '0 10px',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          width: '40px',
          height: '40px',
          marginLeft: '-40px',
          border: 'none',
          backgroundColor: '#fff',
          cursor: 'pointer',
        }}
      >
        <span
          style={{
            content: '',
            width: '16px',
            height: '16px',
            margin: '12px auto',
            //backgroundImage: 'url("https://i.imgur.com/search-icon.png")',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </button>
      <div className="food-page w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {filteredFood.map((item, index) => (
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

export default SearchBar;