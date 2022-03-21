const express = require('express');
const router = express.Router();
const product = require('../controllers/productController');

/**
 * Route yang berhubungan
 * dengan rendering halaman
 */
router.get('/', (req, res) => {
   res.render('produk');
});

router.get('/detail/:id', (req, res) => {

});


/**
 * CONTROLLER RESOURCES
 * Route yang berkomunikasi dengan controller
 */
router.get('/list', product.getProductList);
router.get('/get/:id', product.getProduct);
router.post('/', product.addProduct);
router.put('/:id', product.updateProduct);
router.delete('/:id', product.deleteProduct);

module.exports = router;
