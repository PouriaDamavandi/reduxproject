import { useDispatch } from "react-redux";

//functions=
import { shorten } from "../../helpers/functions";

//Icons
import removeIcon from "../../assets/icons/remove.svg";

//Action
import { decrease, removeItem, increase } from "../../redux/cart/cartAction";

const Cart = (props) => {
  const dispatch = useDispatch();
  const { image, title, price, quantity } = props.data;
  return (
    <div className="flex flex-col">
      <img src={image} alt={title} className="w-64 p-1 m-1 " />
      <div>
        <h3 className="font-bold text-xl m-1 p-1">{shorten(title)}</h3>
        <p className=" w-fit text-center p-1 font-bold text-lg mt-1 mb-2 text-green-600 ml-1">{price} $</p>
        <div>
          <span>{quantity}</span>
        </div>
      </div>
      <div>
        {quantity > 1 ? (
          <button onClick={() => dispatch(decrease(props.data))}> -</button>
        ) : (
          <button onClick={() => dispatch(removeItem(props.data))}>
            {" "}
            <img src={removeIcon} alt="remove icon" style={{ width: "20px" }} />
          </button>
        )}
        <button onClick={() => dispatch(increase(props.data))}>+</button>
      </div>
    </div>
  );
};

export default Cart;
