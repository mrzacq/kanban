if(process.env.NODE_ENV != "production"){
    require('dotenv').config()
}
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const router = require('./router')
const errHandler = require('./middleware/err')

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(router)
app.use(errHandler)

app.listen(port, () => console.log(`Server http://localhost:${port}`))