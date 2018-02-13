const Order = require('../models/ordenes')



function udpateOrder(req, res) {
    let orderId = req.params.id
    Order.findByIdAndUpdate(orderId, req.body, {new:true}, (err, orderUpdate)=>{
        if(err) return res.status(500).send({message: `error al actualizar la orden ${err}`})
        if(!orderUpdate) return res.status(400).send({message: 'no se actualizo la orden'})
        return res.status(200).send({orderUpdate})
    })
}


function saveOrder(req, res) {
    let order = new Order()
    let courseId = req.params.course

    order.course = courseId;
    order.name = req.body.name;
    order.cantida = req.body.cantidad
    order.save((err, courseStored)=>{
        if(err) return res.status(500).send({message: `error al guardar la orden ${err}`})
        if(!courseStored) return res.status(400).send({message: 'no se guardo la orden'})
        return res.status(200).send({courseStored})
    })

}


function deleteOrder(req, res) {
    let orderId = req.params.id
    Order.remove({_id: orderId}, (err) => {
        if(err) return res.status(500).send({message: `error al guardar la orden ${err}`})
        return res.status(200).send({message: 'orden eliminada correctamente'})
    })
}


function getOrders(req, res) {
    Order.find({}, (err, orders)=>{
        if(err) return res.status(500).send({message: `error al buscar la orden ${err}`})
        if(!orders) return res.status(404).send({message: 'no se encontro orden'})
        return res.status(200).send({orders})
    })
}


module.exports = {
    saveOrder,
    deleteOrder,
    udpateOrder,
    getOrders
}