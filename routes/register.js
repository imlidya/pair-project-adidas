const express = require('express')
const router = express.Router()
const Controller = require('../controllers/clientController')

router.get('/register', Controller.form)
router.post('/register', Controller.create)


module.exports = router