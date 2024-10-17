const express = require('express') ; 
const { 
    addTransaction, 
    getAllTransaction } = require('../controllers/transactionController');

const router = express.Router() ; // router object 

// Add transaction 

router.post('/add-transaction', addTransaction)

// Get transaction 

router.get('/get-transaction', getAllTransaction)

module.exports = router ; 