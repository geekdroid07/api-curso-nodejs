'use strict'


const Course = require('../models/course')

function saveCouse(req, res, next){
	let course = new Course()

	course.name = req.body.name;
	course.price = req.body.price;
	course.horario = req.body.horario;

	course.save((err, courseStored)=>{
		if (err) return res.status(500).send({message: `error al guardar el curso ${err}`})

		if (!courseStored) return res.status(401).send({message: 'no se guardo el course'})

		return res.status(200).send({courseStored: courseStored})
	})
	next()
}


function getCourse(req, res){
	res.status(200).send({message: 'this works'})
}


module.exports = {
	saveCouse,
	getCourse
}