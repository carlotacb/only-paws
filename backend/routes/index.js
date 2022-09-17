const bodyParser = require('body-parser')

module.exports = app => {

    app.use(bodyParser.json({limit: '10mb'}))

    // require('./auth')(app)

    app.get('/', function (req, res) {
        return res.send({status: 'up'})
    })

}
