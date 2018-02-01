'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema


let CourseScheme = new Schema({
	name: String,
	horario: String,
	price: Number
})


module.exports = mongoose.model('course', CourseScheme)