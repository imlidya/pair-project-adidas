const Product = require('../models').Product
const User = require('../models').User
const UserOrder = require('../models').UserOrder
const Sequelize = require('sequelize')
const Op = Sequelize.Op

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

    static searchProduct(req, res) {
        console.log(req.body.keyword);
        Product.findAll({
            where:{
                name:{
                    [Op.iLike]: '%'+req.body.keyword+'%'
                }
            }
        })
        .then ((data) => {
            if (data.length<1) {
                // console.log("no result");
                res.send("no result")
            } else {
                // console.log(data);
                res.render("products/searchedProducts",{data:data})
            }
        })
        .catch ((err) => {
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
            // console.log(err)
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
        Product.findAll()
        .then ( data => {
            res.render('products/buyProduct', {data:data})
        })
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