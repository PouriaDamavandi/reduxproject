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
    <div>
      <img src={image} alt={title} />
      <div>
        <h3>{shorten(title)}</h3>
        <p>{price} $</p>
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
