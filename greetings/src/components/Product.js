import React from 'react';

function Product(props) {

   const tambahProduk = () => {
      return alert('produk ditambahkan');
   }

   return (
      <div className="product-item">
         <img src={props.image} alt="" className="product-item-image" />
         <div className="product-item-content">
            <h4 className="product-item-name">{props.product_name}</h4>
            <h5 className="product-item-price">{props.price}</h5>
            <button type="button" className="product-cart-button" onClick={() => tambahProduk()}>Add To Cart</button>
         </div>
      </div>
   )
}

export default Product;
