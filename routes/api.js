'use strict'

const express = require('express')
const router = express.Router()
const { saveCouse, getCourse } = require('../controllers/api')

router.get('/courses', getCourse)
router.post('/saveCourses', saveCouse)



module.exports = router