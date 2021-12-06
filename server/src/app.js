const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const { urlencoded } = require('express')
const app = express()
app.use(morgan('combined'))
app.use(express.json())
app.use(urlencoded({
	extended: true
}))
app.use(cors())

app.get('/status', (req, res) => {
res.send('hi its working')
})

app.listen(process.env.PORT || 8081)
