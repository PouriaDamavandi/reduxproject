import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

//Redux

const ProductDetails = (props) => {
  const id = props.match.params.id;
  const data = useSelector((state) => state.productsState.products);
  const product = data[id - 1];
  const { image, title, description, price, category } = product;
  return (
    <div>
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>
          <span>Category :</span>
          {category}
        </p>
        <div>
          <span>{price} $</span>
          <Link to="/products">Back to the Shop</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;