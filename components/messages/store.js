const db = require('mongoose')
const Model = require('./model')
const dotenv = require('dotenv')

dotenv.config()

db.Promise = global.Promise
db.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORS}@cluster0.e5xg7.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
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

const updateText = async (id, message) => {
    try {
        const foundMessage = await Model.findOne({
            _id: id
        })
        foundMessage.message = message
        const newMessage = await foundMessage.save()
        return newMessage
    } catch (error) {
        console.log('Error updating text', error)
    }
}

module.exports = {
    add: addMessage,
    list: getMessages,
    updateText: updateText
}