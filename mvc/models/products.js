
module.exports = class Product {
  constructor(name) {
    this.name = name
    this.products = [
      {id: 1, name: 'Product 1'},
      {id: 2, name: 'Product 2'},
      {id: 3, name: 'Product 3'},
    ]
  }

  save() {
    this.products.push(this)
  }

  fetchAll() {
    return this.products
  }
}