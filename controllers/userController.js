const User = require('../models').User
const Product = require('../models').Product
const Cart = require('../models').Cart
class UserController {

    static formClient(req, res) {
        res.render('users/registerClient')
    }

    static formAdmin(req, res) {
        res.render('users/registeradmin')
    }

    static pageRegister(req, res) {
        res.render('users/pageregister')
    }

    static registerClient(req, res) {
        User.create({
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        })
        .then(() => {
            res.redirect('/')
        })
        .catch(err => {
            // console.log('create ===> ', req.body.name);
            res.send(err)
        })
    }

    static registerAdmin(req, res) {
        User.create({
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            role: req.body.role,
            password: req.body.password
        })
        .then(() => {
            res.redirect('/')
        })
        .catch((err) => {
            res.send(err)
        })
    }

    static login(req, res) {
        res.render('login')
    }

    static postLogin(req, res) {
        User.findOne({
            where : {
                username : req.body.username,
                password : req.body.password
            }
        })
        .then((data) => {
            if(data.dataValues.role == 'admin') {
                res.redirect('/product/add')
            } else if(data.dataValues.role !== 'admin ' || data.dataValues.role == null){
                res.redirect(`/user/login/product/${data.id}`)
            }
        })
        .catch((err) => {
            res.send(err)
        })
    }

    static addLoop(req, res) {
        Product.findAll()
        .then((datas) => {
            res.render('users/buatloop', {data:datas})
        })
        .catch((err) =>{
            res.send(err)
        })
    }

    static addLoopPost(req, res) {
        // console.log(req.body)
        Cart.create({
            UserId: req.params.id,
            ProductId: req.body.id
        })
        .then((data) => {
            // res.send(data)
            res.redirect(`${data.UserId}`)
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    }

    static userCart(req, res) {
        Promise.all([
            Product.findAll(),
            Cart.findAll()
        ])
        // Cart.findAll()
        .then((data) => {
            res.send(data)
            // res.render('users/checkout')
        })
    }
}

module.exports = UserController