
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const FoodDetail = () => {
  const [items, setFoodDetail] = useState(null);
  console.log(items);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        if (id) {
          const response = await axios.get(`http://localhost:3000/foods/${id}`);
          setFoodDetail(response.data.food);
        } else {
          console.error('Invalid id:', id);
        }
      } catch (error) {
        console.error('Error fetching food detail:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!items) {
    return <div>Loading...</div>;
  }

  return (
    <div className="food-detail">
      <h2>{items.name}</h2>
      <p>Price: ${items.price}</p>
      
      <img src={items.img} alt={items.name} />
      <p>{items.dec}</p>
    </div>
  );
};

export default FoodDetail;
