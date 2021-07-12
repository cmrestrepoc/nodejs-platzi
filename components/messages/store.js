const list = []

const addMessage = message => list.push(message)

const getMessage = () => (list)

module.exports = {
    add: addMessage,
    list: getMessage
}