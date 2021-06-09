const express = require('express')
const cors = require('cors')
require('dotenv').config()
const database = require('./config/db')

database()
.then(()=>{
    console.log('database connected')
})
.catch((err)=>{
    console.log(err)
})



const app = express()

// middleware
app.use(cors())


app.use('/api', require('./Router/Public'))



// server port and listing
const port = process.env.PORT || 1203
app.listen(port, () => {
    console.log(`Server up on Port:${port}`)
})