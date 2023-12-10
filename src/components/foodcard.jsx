import { Link } from "react-router-dom";

const ProductCard = ({ name, price, image, discription, id}) => {
  return (
    <div className="food-card">
      <div className="image-row">
      <img className="food-imge" src={image} alt="" />
      </div>
      <h6 className="food-discription">{discription}</h6>
      <h2 className="food-title">{name}</h2>
      <h5 className="food-price">{price}</h5>

      <Link 
      to={`/fooddetail/${id}`}
      className="btn btn-primary food-btn"
      >
        ShowDetails
        </Link>
    </div>
  );

};

export default ProductCard;
