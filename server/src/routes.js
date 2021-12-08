const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
    app.get('/', AuthenticationController.root)
    app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)
}
