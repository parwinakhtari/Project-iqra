const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const { urlencoded } = require('express')
const { sequelize } = require('./models')
const config = require('./config/config')

const app = express()
app.use(morgan('combined'))
app.use(express.json())
app.use(urlencoded({
	extended: true
}))
app.use(cors())

require('./routes')(app)

const port = config.port
sequelize.sync().then(() => {
	app.listen(port, () => {
		console.log(`Example app listening at http://localhost:${port}`)
	})
})
