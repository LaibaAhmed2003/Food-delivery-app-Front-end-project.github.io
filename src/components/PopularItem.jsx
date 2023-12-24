import { Link } from "react-router-dom";

const PopularItem = ({ name, price, img, id }) => {
  return (
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl cursor-pointer">
      <Link to={`/populardetail/${id}`} className="btn btn-primary product-btn">
        <img
          src={img}
          alt="Food"
          className="h-80 w-72 object-cover rounded-t-xl"
        />
        <div className="px-4 py-3 w-72 cursor-pointer">
          <span className=" text-gray-400 mr-3 uppercase text-xs">
            Most Popular
          </span>
          <p className="text-lg font-bold text-black truncate block capitalize">
            {name}
          </p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-pointer my-3">
              {price}Rs
            </p>
            <del>
              <p className="text-sm text-red-600 cursor-auto ml-2">1199Rs</p>
            </del>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PopularItem;
