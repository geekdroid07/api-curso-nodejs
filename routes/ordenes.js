
const express = require('express')
const router = express.Router()
const { saveOrder, deleteOrder, udpateOrder, getOrders } = require('../controllers/ordenes')


router.get('/ordenes', getOrders);
router.post('/saveOrder/:course', saveOrder)
router.put('/update-order', udpateOrder)
router.delete('/delete-order', deleteOrder)

module.exports = router