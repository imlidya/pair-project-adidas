const User = require('../models').User

class ClientController {
  static form(req, res) {
    res.render('client/register-form')
  }

  static create(req, res) {
    console.log(req.body)
    User.create ({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      role: "client"
    })
    .then(() => {
      res.redirect('/')
    })
    .catch(err => {
      // console.log('create ===> ', req.body.name);
      res.send(err)
    })
  }
}

module.exports = ClientController