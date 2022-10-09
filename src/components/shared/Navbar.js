import { useSelector } from "react-redux";
//Redux

//icons
import cartIcon from "../../assets/icons/cart.svg";

import { Link } from "react-router-dom";

const Navbar = () => {
  const state = useSelector((state) => state.cartState);
  return (
    <div>
      <div>
        <Link to="/products">Products</Link>
      </div>
      <div>
        <Link to="/cart">
          <img src={cartIcon} alt="Cart" style={{ width: "24px" }} />
        </Link>
        <span>{state.itemsCounter}</span>
      </div>
    </div>
  );
};

export default Navbar;
