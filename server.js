'use strict'
const server = require('./app')
const config = require('./config')
const mongoose = require('mongoose')




mongoose.Promise = global.Promise
mongoose.connect(config.db)
	.then(()=>{
		console.log('conexion con la base de datos establecida')
		server.listen(config.port, ()=>{
			console.log(`server is listening on port ${config.port}`)
		})
	})
