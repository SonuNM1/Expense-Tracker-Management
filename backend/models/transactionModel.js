const mongoose = require('mongoose') ; 

const transactionSchema = new mongoose.Schema({
    userid: {
        type: String,
        required: true,
    },
    amount: {
        type: Number, 
        required: [true, 'Amount is required to record this transaction.']
    },
    type: {
        type: String, 
        required: [true, 'Type is required']
    },
    category: {
        type: String, 
        required: [true, 'Category is required to classify your transaction.']
    },
    reference: {
        type: String
    },
    description: {
        type: String, 
        required: [true, 'Please provide a brief description of the transaction.']
    },
    date: {
        type: String,
        required: [true, 'A date is required to record when the transaction took place.']
    }
}, {
    timestamps: true
})

const transactionModel = mongoose.model('transactions', transactionSchema) ; 

module.exports = transactionModel 