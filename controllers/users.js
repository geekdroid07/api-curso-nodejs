const User = require('../models/users')
const bcrypt = require('bcrypt-nodejs')

function getAllUser(req, res) {
    User.find({}, (err, users)=>{
        if(err) return res.status(500).send({message: `error al buscar todos los usuarios`})

        if(!users) return res.status(404).send({message: 'no se encontro ningun usuario'})

        return res.status(200).send({ users })
    })
}


function saveUser(req, res) {
    let email = req.body.email
    let user = new User()
    User.find({email: email.toLowerCase()}, (err, users)=>{
        if(err) return res.status(500).send({message: `error al buscar el usuario ${err}`})
        
        if(users && users.length >= 1) {
            users.map(user => {
                return res.status(200).send({message: `ya existe este usuario favor de iniciar sesion con ${user.email}`})
            })
        }

        user.name = req.body.name
        user.email = req.body.email
        bcrypt.hash(req.body.password, null, null, (err, hash)=>{
            if(err) return res.status(500).send({message: `error al encriptar el password ${err}`})
            user.password = hash
        })
        user.save((err, userStored)=>{
            if(err) return res.status(500).send({message: `error al guardar el usuario ${err}`})

            if(!userStored) return res.status(401).send({message: 'no se pudo guardar el usuario'})

            return res.status(200).send({userStored})
        })
    })

}

function login(req, res) {
    let email = req.body.email;

    User.findOne({email: email.toLowerCase()}, (err, userStored)=>{
        
    })
}


function deleteUser(req, res) {
    let userId = req.params.id
    User.remove({_id: userId}, (err)=>{
        if(err) return res.status(500).send({message: `error al borrar el usuario ${err}`})
        return res.status(200).send({message: 'usuario eliminado correctamente'})
    })
}


module.exports = {
    getAllUser,
    saveUser,
    login,
    deleteUser
}