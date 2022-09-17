const crypto = require('crypto')
const config = require('../../config')
const db = require('./user.db.js')

async function login({username, password}) {
    username = username.toLowerCase()
    const user = await db.get({username})
    if (!user) {
        throw new Error(`Username "${username}" not found`)
    }
    // const encryptedLoginPassword = encryptPassword(password)
    if (password !== user.password) {
        throw new Error(`Incorrect password for username "${username}"`)
    }
    return user
}

/* function encryptPassword(password) {
    return crypto.createHmac('sha256', config.secretKey)
        .update(password)
        .digest('hex')
} */

module.exports = {
    login: login,
    get: db.get,
    getProfilePicture: db.getProfilePicture,
    getCompleteName: db.getCompleteName,
    getUserName: db.getUserName,
    getPetName: db.getPetName,
    getUserType: db.getUserType,
    getTimeSlots: db.getTimeSlots
}
