const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router.get('/', (req,res) => {
    const filterMessages = req.query.user || null
    controller.getMessages(filterMessages)
        .then(messageList => response.success(req, res, messageList, 200))
        .catch(e => response.error(req, res, 'Unexpected Error', 500, e))
})

router.post('/', (req,res) => {
    controller.addMessage(req.body.user, req.body.message)
        .then(fullMessage => response.success(req,res, fullMessage))
        .catch(e => response.error(req, res, 'Información inválida', 400, e))
})

router.patch('/:id', (req, res) => {
    controller.updateMessage(req.params.id, req.body.message)
        .then(data => response.success(req, res, data, 200))
        .catch(err => response.error(req, res, 'Error Interno', 500, err))
})

router.delete('/:id', (req, res) => {
    controller.deleteMessage(req.params.id)
        .then(() => response.success(req, res, `Mensaje ${req.params.id} eliminado`, 200))
        .catch(err => response.error(req, res, 'Error Interno', 500, err))
})

module.exports = router