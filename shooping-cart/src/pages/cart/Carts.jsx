import React from "react";
import { CartStyled, CartList } from "./CartsStyled";
import { useSelector } from "react-redux";
import Layout from "../../components/Layout";

const Carts = () => {
  const { carts } = useSelector((state) => state.productReducer);

  return (
    <Layout>
      <h2>Daftar Keranjang</h2>
      <CartStyled>
        <CartList>
          {carts.length < 1 ? (
            <h2>Cart is empty !</h2>
          ) : (
            <table border="1" width="80%">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Product Name</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {carts &&
                  carts.map((val, key) => {
                    const subtotal = val.qty * val.price;
                    return (
                      <tr key={key}>
                        <td>{key + 1}</td>
                        <td>{val.productName}</td>
                        <td>
                          <button>-</button>
                          <span>{val.qty}</span>
                          <button>+</button>
                        </td>
                        <td>{val.price}</td>
                        <td>{subtotal}</td>
                        <td>
                          <button>Delete</button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          )}
        </CartList>
      </CartStyled>
    </Layout>
  );
};

export default Carts;
