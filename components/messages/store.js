const Model = require('./model')

console.log('Successfully connected to DB in mongoAtlas')

const list = []

const addMessage = message => {
  const myMessage = new Model(message)
  myMessage.save()
}

const getMessages = async (filteredUser) => {
    let filter = {}
    if(filteredUser != null){
        filter = {user: filteredUser}
    }
    const messages = await Model.find(filter)
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

const removeMessage = (id) => {
    return Model.deleteOne({
        _id: id
    })
}

module.exports = {
    add: addMessage,
    list: getMessages,
    updateText: updateText,
    remove: removeMessage
}