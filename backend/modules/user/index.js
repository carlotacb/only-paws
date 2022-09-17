const crypto = require('crypto')
const config = require('../../config')
const db = require('./user.db.js')

async function login({username, password}) {
    username = username.toLowerCase()
    const user = await db.get({username})
    if (!user) {
        throw new Error(`Username "${username}" not found`)
    }
    const encryptedLoginPassword = encryptPassword(password)
    if (encryptedLoginPassword !== user.password) {
        throw new Error(`Incorrect password for username "${username}"`)
    }
    return user
}

function encryptPassword(password) {
    return crypto.createHmac('sha256', config.secretKey)
        .update(password)
        .digest('hex')
}

module.exports = {
    login: login,
    get: db.get,
    getProfilePicture: db.getProfilePicture,
    getProfile: db.getProfile,
    updateProfile: db.updateProfile,
    getByZone: db.getByZone,
    setFavorite: db.setFavorite,
    unsetFavorite: db.unsetFavorite,
    logSharedProposal: db.logSharedProposal,
}
