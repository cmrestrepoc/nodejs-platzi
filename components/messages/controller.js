const store = require('./store')

const addMessage = (user, message) => {
    return new Promise((resolve, reject) => {
        if(!user || !message) {
            console.error('[messageController] No hay usuario o mensaje')
            return reject('Los datos son incorrectos')
        }
        const fullMessage = {
            user,
            message,
            date: new Date()
        }
        store.add(fullMessage)
        resolve(fullMessage)
    })
}

const getMessages = (filteredUser) => {
    return new Promise((resolve, reject) => resolve(store.list(filteredUser)))
}

const updateMessage = (id, message) => {
    return new Promise(async (resolve, reject) => {
        if(!id || !message){
            reject('Invalid Data')
            return false
        }
        const result = await store.updateText(id, message)
        resolve(result)
    })
}

const deleteMessage = (id) => {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject('Id invalido')
            return false
        }

        store.remove(id)
            .then(() => resolve())
            .catch(err => reject(err))
    })
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage
}