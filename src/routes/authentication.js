const express = require ('express')
const authenticationController = require ('../controller/authentication.js')

const router = express.Router();

//POST - REGISTRATION NEW USER
router.post('/register', authenticationController.register)

//POST - LOGIN USER
router.post('/login', authenticationController.login)


module.exports = router