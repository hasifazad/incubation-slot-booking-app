const express = require('express')
const app = express()
const PORT = 4000

const dotenv = require('dotenv')
dotenv.config()

const cors = require('cors')

app.use(cors())

// const bodyParser = require('body-parser')

app.use(express.json())

userRouter = require('./routes/user.js')
adminRouter = require('./routes/admin.js')
app.use('/',userRouter)
app.use('/admin',adminRouter)

const {client} = require('./pgconfig')

client.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('db connected');
    }
})




app.listen(PORT,(err)=>{
    if (err) {
        console.log('connect failed');
    } else {
        console.log('connected to port '+PORT);
    }
})