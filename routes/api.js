'use strict'

const express = require('express')
const router = express.Router()
const { saveCouse, getCourse } = require('../controllers/api')
const multiPart = require('connect-multiparty')
const md_upload = multiPart({uploadDir: './uploads/cursos'})
const md_auth = require('../middlewares/authenticated')



router.get('/courses', getCourse)
router.post('/saveCourses', [ md_upload, md_auth.ensureAuth ], saveCouse)

module.exports = router