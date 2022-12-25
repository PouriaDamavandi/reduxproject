import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

//Redux

const ProductDetails = (props) => {
  const id = props.match.params.id;
  const data = useSelector((state) => state.productsState.products);
  const product = data[id - 1];
  const { image, title, description, price, category } = product;
  return (
    <div className="flex bg-cyan-50">
      <img src={image} alt={title} className="w-96 p-1 m-1 " />
      <div>
        <h3 className="font-bold text-xl m-1 p-1">{title}</h3>
        <p className="text-justify m-1 p-1 text-lg">{description}</p>
        <p className="m-1 p-1 text-lg">
          <span>Category :</span>
          {category}
        </p>
        <div>
          <span className="w-fit text-center p-1 font-bold text-lg mt-1 mb-2 text-green-600 ml-1">{price} $</span>
          <Link to="/products" className="m-1 p-1 text-lg bg-blue-400 text-white rounded" >Back to the Shop</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
