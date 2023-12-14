import { Link } from "react-router-dom";

<<<<<<< HEAD
const ProductCard = ({ name, price, img, id }) => {
=======
const ProductCard = ({ name, price, img, dec, CategoryName, id}) => {
>>>>>>> 5a3568abb8aff0bbeabb11cc2687f6778ce6f8ae
  return (
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <Link
        to={`/burgerdetail/${id}`}
        className="btn btn-primary product-btn"
      > 
      <img
        src={img}
        alt="Food"
        className="h-80 w-72 object-cover rounded-t-xl"
      />
      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">Foodfest</span>
        <p className="text-lg font-bold text-black truncate block capitalize">
          {name}
        </p>
        <div className="flex items-center">
          <p className="text-lg font-semibold text-black cursor-auto my-3">
            {price}
          </p>
          <del>
            <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
          </del>

         
        </div>
      </div>
      </Link>
    </div>
  );
};

export default ProductCard;
