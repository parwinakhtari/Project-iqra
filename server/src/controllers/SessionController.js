const { Session } = require('../models')

module.exports = {
    async index (req, res) {
        try {
            const dd = new Date().getDate()
            const month = new Date().getMonth() + 1
            const year = new Date().getFullYear()
            const today = dd + '-' + month + '-' + year
            const session = await Session.findAll({
                where:
                {
                    date: today
                }
            })
            res.send(session)
        } catch (error) {
            console.log('we r here', error)
            res.status(500).send({
                error: 'an error occured while trying to fetch the sessions'
            })
        }
    },
    async post (req, res) {
        try {
            const session = await Session.create(req.body)
            res.send(session)
        } catch (error) {
            res.status(500).send({
                error: 'An error has occured while creating session'
            })
        }
    }
}
