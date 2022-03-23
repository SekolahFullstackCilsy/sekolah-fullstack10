const Product = require("../models/products")

exports.getProductList = (req, res) => {
  const products = new Product()
  const data = products.fetchAll()

  console.log(data)

  res.render('products', {
    products: data,
  })
}