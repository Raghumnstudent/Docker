const express = require('express')
const process = require('process')
const app = express()

process.on('SIGINT',() => {
	console.log("The application was interrupted....!")
	process.exit(0)
})


process.on('SIGTERM',() => {
	console.log("The application was terminated....!")
	process.exit(0)
})

app.get('/', function (req, res) {
  res.send('Hi this message is served from node js using express module')
})

app.listen(3000)
