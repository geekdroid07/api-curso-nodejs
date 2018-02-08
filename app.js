const express = require('express')
const app = express()
const bodyParser =  require('body-parser')
const routes = require('./routes/api')
const routesUser = require('./routes/users')

// middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))


// app.use((req, res, next)=>{
// 	let err = new Error('dummy error')
// 	err.status = 404
// 	next(err)
// })

// app.use((err, req, res, next)=>{
// 	res.status(err.status || 500).json({
// 		mensaje: err.message
// 	})
// })


// routes
app.use('/api', routes)
app.use('/api', routesUser)
module.exports = app