const express = require('express')

// const router = require('./components/messages/network')
const router = require('./network/routes')

const app =  express()
app.use(express.json())
app.use(express.urlencoded({extended: false})) // optional
// app.use(router)
router(app)

app.use('/app', express.static('public'))

app.listen(3000)
console.log('App is listening in http://localhost:3000')