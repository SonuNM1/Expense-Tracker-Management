const express = require('express') ; 
const { 
    addTransaction, 
    getAllTransaction,
    editTransaction,
    deleteTransaction
} = require('../controllers/transactionController');

const router = express.Router() ; // router object 

// Add transaction 

router.post('/add-transaction', addTransaction)

// Edit transaction

router.post('/edit-transaction', editTransaction)

// Delete transaction

router.post('/delete-transaction', deleteTransaction)

// Get transaction 

router.post('/get-transaction', getAllTransaction)

module.exports = router ; 