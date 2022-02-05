import React from 'react';

function AddProduct(props) {
   return (
      <div>
         <button type="button" onClick={props.onTambahProduk}>Add Product</button>
      </div>
   )
}

export default AddProduct;
