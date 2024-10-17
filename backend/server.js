
const express = require("express") ; 
const cors = require("cors") ; 
const morgan = require("morgan") ; 
const dotenv = require("dotenv") ; 
const colors = require("colors") ;
const connectDB = require("./config/connectDB");

dotenv.config() ; // config dotenv file 

const app = express() ; 

connectDB() ; // database call

// Middleware 

app.use(morgan('dev')) ; 
app.use(express.json()) ; 
app.use(cors()) ; 

// User route 

app.use('/api/v1/users', require('./routes/userRoute')) ; 

// Transaction route

app.use('/api/v1/transactions', require('./routes/transactionRoutes')) ; 

// Port 

const PORT = 4000 || process.env.PORT ; 

// listen 

app.listen(PORT, () => {
    console.log(`Server running on: http://localhost:/${PORT}`.bgGreen.white) ; 
})

