const express = require('express')
const db = require('./db')
const dotenv = require('dotenv')

dotenv.config()

// const router = require('./components/messages/network')
const router = require('./network/routes')

db(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.e5xg7.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)

const app =  express()
app.use(express.json())
app.use(express.urlencoded({extended: false})) // optional
// app.use(router)
router(app)

app.use('/app', express.static('public'))

app.listen(3000)
console.log('App is listening in http://localhost:3000')