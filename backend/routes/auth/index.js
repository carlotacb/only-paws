const f = require('../util').wrapAsyncRouterFunction
const db = require('../../db')
const uuid = require('uuid');

module.exports = app => {
    app.post('/login', f(async function (req, res) {
        const password = req.body.password
        const username = req.body.username.toLowerCase()

        await db.getUserPassword(username, password).then((response) => {
            if (response.length === 0) {
                console.log('This user does not exists')
                return res.status(403).send("the user does not exists")
            } else if (response[0].password !== password) {
                console.log('The password was incorrect')
                return res.status(401).send("incorrect password")
            } else {
                const id = uuid.v4()
                const session_information = [id, username]

                db.createNewSession(session_information).then((response) => {
                    return res.send({token: id})
                })
            }
        })

    }))

    app.post('/signup', f(async function (req, res) {
        const nickname = (req.body.nickname).toLowerCase()
        const pet_name = req.body.pet_name
        const name = req.body.name
        const user_type = req.body.user_type
        const pet_type = req.body.pet_type
        const days = req.body.days
        const password = req.body.password

        const new_user = [nickname, pet_name, name, user_type, pet_type, days, password]

        db.createNewUser(new_user)
            .then((response) => {
                if (response !== undefined) {
                    console.log('This user already exists')
                    return res.status(403).send("the user already exists")
                } else {
                    console.log('Successfully user created')
                    return res.send("user created correctly")
                }
            }).catch((error) => {
            return error
        })
    }))


}
