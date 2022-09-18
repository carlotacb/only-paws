const bodyParser = require('body-parser')

module.exports = app => {

    app.use(bodyParser.json({limit: '10mb'}))

    require('./auth')(app)

    app.get('/', function (req, res) {
        return res.send({status: 'up'})
    })

    // Create new user profile
    app.post('/user/create', (req, res) => {
        // Parse the request
     
        // Save to the db

        return res.status(200).send('Profile created')
    })

    // Updated existing user profile
    app.put('/user/:id/update', (req, res) => {
        // Update the db

        return res.status(200).send('Profile updated')
    })
}
