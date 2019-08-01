const User = require('../models').User
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
            if(data.role == 'admin') {
                res.redirect('/product/add')
            } else {
                res.redirect('/')
            }
        })
        .catch((err) => {
            res.send(err)
        })
    }
}

module.exports = UserController