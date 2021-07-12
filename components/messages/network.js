const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router.get('/', (req,res) => {
    controller.getMessages()
        .then(messageList => response.success(req, res, messageList, 200))
        .catch(e => response.error(req, res, 'Unexpected Error', 500, e))
})

router.post('/', (req,res) => {
    controller.addMessage(req.body.user, req.body.message)
        .then(fullMessage => response.success(req,res, fullMessage))
        .catch(e => response.error(req, res, 'Información inválida', 400, e))
})

module.exports = router