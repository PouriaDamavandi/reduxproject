import "./App.css";
import Store from "../src/components/Store";

import { Provider } from "react-redux";

//Redux
import store from "./redux/store";

//Context
import { Switch, Route, Redirect } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Navbar from "./components/shared/Navbar";
import ShopCart from "./components/ShopCart";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Switch>
        <Route path="/products/:id" component={ProductDetails} />
        <Route path="/products" component={Store} />
        <Route path="/cart" component={ShopCart} />
        <Redirect to="/products" />
      </Switch>
    </Provider>
  );
}

export default App;
