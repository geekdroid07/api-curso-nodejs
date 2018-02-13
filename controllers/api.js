'use strict'


const Course = require('../models/course')
const fs = require('fs')
const path = require('path')

function deleteCourse(req, res) {

}

function updateCourse(req, res) {
	let userId = req.params.id
	let course = req.body.id

	if(userId != req.user.sub) return res.status(401).send({message: 'no tienes permisos para hacer esta accion'})

	Course.findByIdAndUpdate(course, req.body, { new:true }, (err, couseUpdated)=>{
		// if(err)
	})

}



function saveCouse(req, res) {
	if(!req.body.name || !req.body.price || !req.body.horario || !req.files.image) return res.status(400).send({message: 'tienes que enviar todos los campos correctamente'})


	let course = new Course()
	
	course.name = req.body.name;
	course.price = req.body.price;
	course.horario = req.body.horario;

	let file_path = req.files.image.path
	let file_split = file_path.split('\\')
	let file_name = file_split[2]
	let ext_split = file_name.split('\.')
	let file_ext = ext_split[1]
	let name = req.files.image.originalFilename

	if (file_ext == 'png' || file_ext == 'jpeg' || file_ext == 'jpg' || file_ext == 'gif') {
		course.image = name
		course.save((err, courseStored)=>{
		if (err) return removeFilesofUploads(res, file_path, `error al guardar el curso ${err}`)

		if (!courseStored) return removeFilesofUploads(res, file_path, 'no se guardo el course')

		return res.status(200).send({courseStored: courseStored})
	})
	}

}


function removeFilesofUploads(res, file, message) {
	fs.unlink(file, (err)=>{
	  res.status(403).send({message: message})
	})
  }



function getImage(req, res) {
  let image_file = req.params.img
  let path_file = './uploads/cursos/'+image_file

  fs.exists(path_file, (exists)=>{
    if (exists) {
      res.sendFile(path.resolve(path_file))
    } else {
      res.status(200).send({message: 'no existe la imagen'})
    }
  })
}

function getCourse(req, res){

	Course.find({}, (err, courses)=>{
		if(err) return res.status(500).send({message: `error al buscar los cursos`})
		if(!courses) return res.status(404).send({message: 'no se encontro ningun curso'})
		return res.status(200).send({courses})
	})	

}


module.exports = {
	saveCouse,
	getCourse,
	getImage
}