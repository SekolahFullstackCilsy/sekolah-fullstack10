const router = require('express').Router();

//children route
router.get('/', (req, res) => {
   res.send('ini about router')
})

module.exports = router;
