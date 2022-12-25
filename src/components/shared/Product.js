import { useSelector, useDispatch } from "react-redux";

//Fucntions
import { shorten, quantityCount, isInCart } from "../../helpers/functions";

import { Link } from "react-router-dom";

// Icons
import removeIcon from "../../assets/icons/remove.svg";
import minusIcon from "../../assets/icons/minus.svg";
import plusIcon from "../../assets/icons/plus.svg";

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
      <div className=" mr-4 p-3 bg-teal-100 rounded-2xl mt-8">
        <img
          src={productData.image}
          alt={productData.title}
          className="w-52 h-52 mr-5 ml-5 "
        />
        <h3 className="font-bold text-xl mt-4">{shorten(productData.title)}</h3>
        <p className=" w-fit text-center p-1 font-bold text-lg mt-1 mb-2 text-green-600">
          {productData.price} $
        </p>
        <div className="flex justify-between">
          <Link
            to={`/products/${productData.id}`}
            className="bg-blue-400 rounded p-1 text-white text-center text-lg "
          >
            Details
          </Link>
          <div className="flex justify-center">
            {quantityCount(state, productData.id) > 1 && (
              <button onClick={() => dispatch(decrease(productData))}>
                <img src={minusIcon} alt="minus" className="w-6 m-1 p-1" />
              </button>
            )}
            {quantityCount(state, productData.id) > 1 && (
              <span className="w-6 m-1 p-1 bg-white text-center rounded-xl">
                {quantityCount(state, productData.id)}
              </span>
            )}
            {quantityCount(state, productData.id) === 1 && (
              <button onClick={() => dispatch(removeItem(productData))}>
                <img src={removeIcon} alt="remove" className="w-6 m-1 p-1" />
              </button>
            )}
            {isInCart(state, productData.id) ? (
              <button onClick={() => dispatch(increase(productData))}>
                <img src={plusIcon} alt="plus" className="w-6 m-1 p-1" />
              </button>
            ) : (
              <button
                onClick={() => dispatch(addItem(productData))}
                className="bg-green-400 rounded p-1 text-white text-center text-lg "
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
