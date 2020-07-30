const express = require('express')
const app = express()
const PORT = 5000
const mongoose = require('mongoose')
const {MONGOURI} = require('./keys')


mongoose.connect(MONGOURI,{
    useUnifiedTopology: true,
    useNewUrlParser: true
})
mongoose.connection.on('connected', () =>{
    console.log("connected to mngo")
})

mongoose.connection.on('error', (err) =>{
    console.log("err", err)
})


require('./models/user')
require('./models/post')
require('./models/user')

app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))
app.use(require('./routes/user'))


app.listen(PORT,()=>{
    console.log("server is running", PORT)
})

