const Product = require('../models').Product

class ProductController {
    static form(req, res) {
        res.render('products/formProduct')
    }

    static createProduct(req, res) {
        Product.create({
            name: req.body.name,
            price: req.body.price
        })
        .then(() => {
            res.redirect('/')
        })
        .catch(err => {
            // console.log('create ===> ', req.body.name);
            res.send(err)
        })
    }

    static listProduct(req, res) {
        Product.findAll({
            order : [
                ['id', 'ASC']
            ]
        })
        .then(() => {
            res.render('products/list')
        })
        .catch(() => {
            res.send(err)
        })
    }
}

module.exports = ProductController