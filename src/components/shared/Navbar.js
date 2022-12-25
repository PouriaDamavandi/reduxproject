import { useSelector } from "react-redux";
//Redux

//icons
import cartIcon from "../../assets/icons/cart.svg";

import { Link } from "react-router-dom";

const Navbar = () => {
  const state = useSelector((state) => state.cartState);
  return (
    <div className="flex bg-gray-100 content-between justify-between sticky top-0 w-full h-14 ">
      <div>
        <Link
          to="/products"
          className="text-4xl text-blue-800 font-bold ml-4 text-center"
        >
          Products
        </Link>
      </div>
      <div className="flex ">
        <Link to="/cart">
          <img src={cartIcon} alt="Cart" className="w-12 mr-4" />
        </Link>
        <span className="relative right-16 text-white bg-yellow-400 rounded-full w-6 h-6 m-auto text-center	font-bold">
          {state.itemsCounter}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
