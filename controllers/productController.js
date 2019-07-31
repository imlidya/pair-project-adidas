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
            res.redirect('/product')
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
        .then((data) => {
            res.render('products/list', {data: data})
        })
        .catch(() => {
            res.send(err)
        })
    }

    static delete(req, res) {
        Product.destroy({
            where: {
                id : req.params.id
            }
        })
        .then()
    }

    static login(req, res) {
        res.render('login')
        .then(() => {
            res.redirect('/product/login')
        })
        .cath((err) => {
            res.send(err)
        })
    }

    static buyProduct(req, res) {
        res.render('products/buyProduct')
        .then(() => {
            res.redirect('/product/buy-product')
        })
        .catch((err) => {
            res.send(err)
        })
    }
}

module.exports = ProductController