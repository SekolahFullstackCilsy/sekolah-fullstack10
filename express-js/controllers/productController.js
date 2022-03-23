
/**
 * Fungsi untuk mendapatkan produk list
 * dari database melalui model
 */
exports.getProductList = (req, res) => {
   res.json({
      data: [
         {
            id: 1,
            nama: 'Produk 1'
         },
         {
            id: 2,
            nama: 'Produk 2'
         },
         {
            id: 3,
            nama: 'Produk 3'
         }
      ]
   })
}

/**
 * Fungsi untuk mendapatkan produk data
 * dari database melalui model
 * berdasarkan id yang diberikan
 */
exports.getProduct = (req, res) => {
   const { id } = req.params;

   res.json({
      id: id
   });
}

/**
 * Fungsi untuk menambahkan data produk
 * ke database melalui model
 */
exports.addProduct = (req, res) => {
   console.log(req.body);
   res.json(req.body);
}

/**
 * Fungsi untuk update data produk
 * ke database melalui model
 * berdasarkan id yang diberikan
 */
exports.updateProduct = (req, res) => {
   res.json({
      id: req.params.id,
      data: req.body
   });
}

/**
 * Fungsi untuk menghapus data produk
 * ke database melalui model
 * berdasarkan id yang diberikan
 */
exports.deleteProduct = (req, res) => {
   res.json({
      id: req.params.id
   })
}