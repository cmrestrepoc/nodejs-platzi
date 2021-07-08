const express = require('express')
const response = require('../../network/response')
const router = express.Router()

router.get('/', (req,res) => {
    console.log(req.headers)
    res.header({
        "custom-header": "Nuestro Valor personalizado",
    })
    response.success(req,res, 'Lista de mensajes')
})

router.post('/', (req,res) => {
    console.log(req.query)
    if(req.query.error == "ok") {
        response.error(req, res, 'Error inesperado', 500, 'Es solo una simulación de error')
    } else {
        response.success(req, res, 'Creado correctamente')
    }
})

module.exports = router