const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    course: { type: Schema.ObjectId, ref: 'course' },
    cantidad: { type: String, required: true },
    name:  { type: String, required: true }
})

module.exports = mongoose.model('order', OrderSchema)