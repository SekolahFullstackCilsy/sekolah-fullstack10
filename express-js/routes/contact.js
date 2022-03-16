const router = require('express').Router();

//children
router.get('/', (req, res) => {
   res.send('ini contact router')
})

module.exports = router