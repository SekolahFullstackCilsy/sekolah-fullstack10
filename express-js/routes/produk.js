const express = require('express');
const router = express.Router();
const path = require('path');

// Read List
router.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, "../", "pages", "product.html"));
});

router.post('/', (req, res) => {
   const { nama_produk, harga } = req.body;
   res.json({
      nama_produk, harga
   });
});

module.exports = router;
