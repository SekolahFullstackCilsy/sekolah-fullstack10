import React from 'react';
import Product from './Product';
import AddProduct from './AddProduct';

function ProductList() {
   const [products, setProducts] = React.useState([
      {
         image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
         product_name: "Mac Book Pro",
         price: 10000000
      },
      {
         image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
         product_name: "Asus Laptop",
         price: 8000000
      },
      {
         image: "https://images.unsplash.com/photo-1527434082571-c71226af7333?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
         product_name: "Thinkpad Laptop",
         price: 5000000
      }
   ]);

   const addProduct = () => {
      setProducts([
         ...products,
         {
            image: "https://images.unsplash.com/photo-1527434082571-c71226af7333?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            product_name: "Laptop Baru",
            price: 3000000
         }
      ]);
   }

   return (
      <div className="wrapper">
         <h4>Product List</h4>
         <div className="product-wrapper">
            {products.map((item, index) => (
               <Product
                  key={index}
                  product_name={item.product_name}
                  image={item.image}
                  price={item.price}
               />
            ))}
         </div>
         <AddProduct onTambahProduk={addProduct} />
      </div>
   );
}

export default ProductList;
