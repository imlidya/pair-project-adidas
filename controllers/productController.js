const Product = require('../models').Product
const User = require('../models').User
const UserOrder = require('../models').UserOrder

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
            // res.send(data)
        })
    
        .catch((err) => {
            res.send(err)
        })
    }

    static delete(req, res) {
        Product.destroy({
            where :{
                id : req.params.id
            }
        })
        .then(() => {
            res.redirect('/product')
        })
        .catch((err) => {
            res.send(err)
        })
    }

    static buyProduct(req, res) {
        res.render('products/buyProduct')
    }

    static updateForm(req,res){
        Product.findOne({
            where : {
                id : req.params.id
            }
        })
        .then(data=>
            res.render('products/editProduct',{data: data}))
        .catch(err=>
            res.send(err))
       
    }

    static editProduct(req, res) {
        Product.update(
            req.body, {
                where :{
                    id : req.params.id
                }
            }
        )
        .then(() => {
            res.redirect('/product')
        })
        .catch((err) => {
            res.send(err)
        })
    }
}

module.exports = ProductController