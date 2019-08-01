const express = require('express')
const router = express.Router()
const Controller = require('../controllers/productController')

router.get('/product', Controller.listProduct)
router.get('/', Controller.buyProduct)
router.get('/product/add', Controller.form)
router.post('/product/add', Controller.createProduct)
router.get('/product/delete/:id', Controller.delete)
router.get('/product/edit/:id', Controller.updateForm)
router.post('/product/edit/:id', Controller.editProduct)

router.post('/product/search',Controller.searchProduct)


module.exports = router