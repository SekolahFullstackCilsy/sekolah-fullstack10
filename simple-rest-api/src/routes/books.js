const { Router } = require('express')
const { create, findAll, findOne, remove, update } = require('../controllers/books')
const router = Router()

router.post('/', create)
router.get('/', findAll)
router.get('/:id', findOne)
router.delete('/:id', remove)
router.put('/:id', update)

module.exports = router