const express = require('express') ; 
const { 
    loginController, 
    registerController } = require('../controllers/userController');

const router = express.Router() ; 

// POST || LOGIN 

router.post('/login', loginController)

// POST || Register 

router.post('/register', registerController)

module.exports = router ; 