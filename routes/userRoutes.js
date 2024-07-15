const express  = require('express')
const { loginController, registerController } = require ('../controllers/userCtrl')

const router  = express.Router()

// login  || post 
router.post('/login',loginController)

// resister 
router.post('/register',registerController)


module.exports = router 