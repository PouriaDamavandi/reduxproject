import { useSelector, useDispatch } from "react-redux";
//Components
import Cart from "./shared/Cart";
//Context
import { Link } from "react-router-dom";

//Actions
import { checkout, clear } from "../redux/cart/cartAction";

const ShopCart = () => {
  const state = useSelector((state) => state.cartState);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        {state.selectedItems.map((item) => (
          <Cart key={item.id} data={item} />
        ))}
      </div>
      {state.itemsCounter > 0 && (
        <div>
          <p>
            <span>Total Items:</span>
            {state.itemsCounter}
          </p>
          <p>
            <span>Total Price:</span>
            {state.total}
          </p>
          <div>
            <button onClick={() => dispatch(checkout())}>Check Out</button>
            <button onClick={() => dispatch(clear())}>Clear</button>
          </div>
        </div>
      )}

      {state.checkout && (
        <div>
          <h3>Checked out Successfully!</h3>

          <Link to="/products"> Buy More!</Link>
        </div>
      )}

      {!state.checkout && state.itemsCounter === 0 && (
        <div>
          <h3>want to buy?</h3>

          <Link to="/products"> Go to shop!</Link>
        </div>
      )}
    </div>
  );
};

export default ShopCart;
