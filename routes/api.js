'use strict'

const express = require('express')
const router = express.Router()
const { getImage, saveCouse, getCourse } = require('../controllers/api')
const multiPart = require('connect-multiparty')
const md_upload = multiPart({uploadDir: './uploads/cursos'})
const md_auth = require('../middlewares/authenticated')



router.get('/courses', getCourse)
router.post('/save', [md_upload, md_auth.ensureAuth], saveCouse)
router.get('/get-images/:img', getImage)
module.exports = router