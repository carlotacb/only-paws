function invalidCredentials() {
    Error.captureStackTrace(this, this.constructor)

    this.name = this.constructor.name
    this.message = 'Invalid username/password combination.'
    this.status = 403
    this.errorCode = 'E001'
}

module.exports = {
    invalidCredentials: invalidCredentials,
}
