const express = require('express')
const router = express.Router()
const path = require('path')

// child route
router.get('/', (req, res) => {
   const { nama } = req.query;
   res.render("home", {
      nama_orang: nama
   });
});

module.exports = router;
