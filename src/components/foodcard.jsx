import { Link } from "react-router-dom";

const ProductCard = ({ name, price, img, dec, id }) => {
  return (
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      
      <Link 
      to={`/burger-detail/${id}`}
      className="btn btn-primary product-btn"
      >
        </Link>
        <img
          src={img}
          alt="Food"
          className="h-80 w-72 object-cover rounded-t-xl"
        />
        <div className="px-4 py-3 w-72">
          <span className="text-gray-400 mr-3 uppercase text-xs">KFC</span>
          <p className="text-lg font-bold text-black truncate block capitalize">
            {name}
          </p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">
              $149
            </p>
            <del>
              <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
            </del>
       
          </div>
        </div>
      
    </div>
  );
};

export default ProductCard;
