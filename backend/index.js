const express = require('express')
const app = express()
const db = require('./models/db')
const config = require('./config')
const { Client } = require("pg");

const BootstrapRouter = require('./routes')

BootstrapRouter(app)
BootstrapServer(app)
StartServer(app)

function BootstrapServer(app) {
    app.use(function (err, req, res, next) { // eslint-disable-line
        console.error(`Error on ${req.method} ${req.path} with request body ${JSON.stringify(req.body)}\n`, err)
        return res.status(err.status || 500).json({errorCode: err.errorCode, message: err.message})
    })
}

function StartServer(app) {
    app.listen(config.port, function () {
        console.log(`Backend listening on port ${config.port}!`)
    })
    //connectDBWithRetry()
}

/*function connectDBWithRetry() {
    db.connect().catch(error => {
        console.error('Error connecting DB. Retrying in 3 seconds...')
        console.error(error)
        setTimeout(connectDBWithRetry, 3000)
    })
}*/
