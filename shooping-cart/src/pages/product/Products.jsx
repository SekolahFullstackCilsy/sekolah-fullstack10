import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../../components/Layout";
import { addToCart, getProducts } from "../../store/actions/product";
import { ProductsStyled, Card } from "./ProductsStyled";

const Products = () => {
  const dispacth = useDispatch();
  const { products, carts } = useSelector((state) => state.productReducer);

  useEffect(() => {
    dispacth(getProducts());
  }, []);

  const handleAddToCart = (id) => {
    dispacth(addToCart(id));
  };

  console.log(carts, "carts");

  return (
    <Layout>
      <h1>Product Page</h1>
      <ProductsStyled>
        {products &&
          products.map((val, key) => {
            return (
              <Card key={key}>
                <img src={val.imageUrl} alt={val.productName} />
                <h2>{val.productName}</h2>
                <p>{val.description}</p>
                <h5>Stock: {val.stock}</h5>
                <h4>Price: {val.price}</h4>
                <button onClick={() => handleAddToCart(val.id)}>
                  Add To Cart
                </button>
              </Card>
            );
          })}
      </ProductsStyled>
    </Layout>
  );
};

export default Products;
