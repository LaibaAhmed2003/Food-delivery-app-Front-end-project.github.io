
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const FoodDetail = () => {
  const [foodDetail, setFoodDetail] = useState(null);
  const { ID } = useParams();
  console.log(foodDetail);

  useEffect(() => {
    console.log('ID:', ID);
    getData();
  }, [] );
    const getData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/foods/get/${ID}`);
        setFoodDetail(response.data);
      } catch (error) {
        console.error('Error fetching food detail:', error);
      }
    };

  if (!foodDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="food-detail">
      <h2>{foodDetail.name}</h2>
      <p>Price: ${foodDetail.price}</p>
      <p>Category: {foodDetail.CategoryName}</p>
      <img src={foodDetail.img} alt={foodDetail.name} />
      <p>{foodDetail.description}</p>
    </div>
  );
};

export default FoodDetail;
