import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Products from "./pages/product/Products";
import Carts from "./pages/cart/Carts";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Products} />
        <Route path="/products" component={Products} />
        <Route path="/carts" component={Carts} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
