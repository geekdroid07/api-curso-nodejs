'use strict'


const Course = require('../models/course')
const fs = require('fs')



function saveCouse(req, res, next) {
	// let course = new Course()

	console.log(token)

	// course.name = req.body.name;
	// course.price = req.body.price;
	// course.horario = req.body.horario;

	// if(!req.body.name || !req.body.price || !req.body.horario || !req.files.image) return res.status(400).send({message: 'tienes que enviar todos los campos correctamente'})

	// let file_path = req.files.image.path
	// let file_split = file_path.split('\\')
	// let file_name = file_split[2]
	// let ext_split = file_name.split('\.')
	// let file_ext = ext_split[1]
	// let name = req.files.image.originalFilename

	// if (file_ext == 'png' || file_ext == 'jpeg' || file_ext == 'jpg' || file_ext == 'gif') {
	// 	course.image = name
	// 	course.save((err, courseStored)=>{
	// 	if (err) return removeFilesofUploads(res, file_path, `error al guardar el curso ${err}`)

	// 	if (!courseStored) return removeFilesofUploads(res, file_path, 'no se guardo el course')

	// 	return res.status(200).send({courseStored: courseStored})
	// })
	// }
	// next()

}


function removeFilesofUploads(res, file_path, message) {
	fs.unlink(file_path, (err)=>{
	  res.status(403).send({message: message})
	})
  }

function getCourse(req, res){
	res.status(200).send({message: 'this works'})
}


module.exports = {
	saveCouse,
	getCourse
}