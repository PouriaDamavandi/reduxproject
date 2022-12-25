import React, { useEffect } from "react";

import Product from "./shared/Product";
import { useSelector, useDispatch } from "react-redux";

//Redux
import { fetchProducts } from "../redux/products/productsAction";

const Store = () => {
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.productsState);
  useEffect(() => {
    if (!productsState.products.length) dispatch(fetchProducts());
  }, [dispatch, productsState.products.length]);
  return (
    <div >
      <div className="flex flex-wrap content-between justify-center ">
        {productsState.loading ? (
          <h2>Loading ...</h2>
        ) : productsState.error ? (
          <p>Something went wrong</p>
        ) : (
          productsState.products.map((product) => (
            <Product key={product.id} productData={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default Store;
