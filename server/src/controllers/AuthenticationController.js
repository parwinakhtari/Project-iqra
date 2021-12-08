const { User } = require('../models')
module.exports = {
    async register (req, res) {
        try {
        const user = await User.create(req.body)
        res.send(user.toJSON())
        } catch (error) {
            res.status(400).send({
                error: 'Found some bug maybe email is same'
            })
        }
    },
    root (req, res) {
        res.send('hi its working')
    }
}