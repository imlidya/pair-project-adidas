const express = require('express')
const router = express.Router()
const Controller = require('../controllers/userController')

router.get('/login', Controller.login)
router.post('/login', Controller.postLogin)

router.get('/login/product/:id', Controller.addLoop)
router.post('/login/product', Controller.addLoopPost)

router.get('/register/admin', Controller.formAdmin)
router.get('/register/client', Controller.formClient)
router.post('/register/client', Controller.registerClient)
router.post('/register/admin', Controller.registerAdmin)

module.exports = router