const db = require('mongoose')
const Model = require('./model')

db.Promise = global.Promise
db.connect('mongodb+srv://CRESTREPO:dQy2bV7LMEnKySv@cluster0.e5xg7.mongodb.net/platziDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

console.log('Successfully connected to DB in mongoAtlas')

const list = []

const addMessage = message => {
  const myMessage = new Model(message)
  myMessage.save()
}

const getMessages = async () => {
    const messages = await Model.find()
    return messages
}

module.exports = {
    add: addMessage,
    list: getMessages
}