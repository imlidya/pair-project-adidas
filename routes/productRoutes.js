const express = require('express')
const router = express.Router()
const Controller = require('../controllers/productController')

router.get('/', Controller.ListProduct)
router.get('/add', Controller.form)
router.post('/add', Controller.createProduct)

module.exports = router