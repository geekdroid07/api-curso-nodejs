const express = require('express')
const router = express.Router()
const { saveUser, getAllUser, login, deleteUser } = require('../controllers/users')

router.post('/register', saveUser);
router.post('/login', login);
router.get('/get-users', getAllUser);
// delete user
router.delete('/delete-user/:id', deleteUser)

module.exports = router
