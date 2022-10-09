import { useSelector, useDispatch } from "react-redux";

//Fucntions
import { shorten, quantityCount, isInCart } from "../../helpers/functions";

import { Link } from "react-router-dom";
import removeIcon from "../../assets/icons/remove.svg";

//Actions
import {
  addItem,
  removeItem,
  increase,
  decrease,
} from "../../redux/cart/cartAction";
const Product = ({ productData }) => {
  const state = useSelector((state) => state.cartState);
  const dispatch = useDispatch();
  return (
    <div>
      <img
        src={productData.image}
        alt={productData.title}
        style={{ width: "200px", height: "200px" }}
      />
      <h3>{shorten(productData.title)}</h3>
      <p>{productData.price} $</p>
      <div>
        <Link to={`/products/${productData.id}`}>Details</Link>
        <div>
          {quantityCount(state, productData.id) > 1 && (
            <button onClick={() => dispatch(decrease(productData))}>-</button>
          )}
          {quantityCount(state, productData.id) > 1 && (
            <span>{quantityCount(state, productData.id)}</span>
          )}
          {quantityCount(state, productData.id) === 1 && (
            <button onClick={() => dispatch(removeItem(productData))}>
              <img src={removeIcon} alt="remove" style={{ width: "24px" }} />
            </button>
          )}
          {isInCart(state, productData.id) ? (
            <button onClick={() => dispatch(increase(productData))}>+</button>
          ) : (
            <button onClick={() => dispatch(addItem(productData))}>
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
