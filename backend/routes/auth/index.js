const userModule = require('../../models/user')
const errors = require('../../models/error')

module.exports = app => {
    app.post('/api/login', f(async function (req, res) {
        const password = req.body.password
        const username = req.body.username.toLowerCase()

        try {
            const user = await userModule.login({username, password})
            return res.send({
                username: user.username,
            })
        } catch (error) {
            console.error(error)
            throw new errors.invalidCredentials()
        }
    }))
}
