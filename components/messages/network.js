const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router.get('/', (req,res) => {
    console.log(req.headers)
    res.header({
        "custom-header": "Nuestro Valor personalizado",
    })
    response.success(req,res, 'Lista de mensajes')
})

router.post('/', (req,res) => {
    controller.addMessage(req.body.user, req.body.message)
        .then(fullMessage => response.success(req,res, fullMessage))
        .catch(e => response.error(req, res, 'Información inválida', 400, 'Error en el controlador'))
})

module.exports = router