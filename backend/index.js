const express = require('express')
const app = express()

const config = require('./config')

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
}

