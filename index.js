const express = require('express')
const app = express()
const breweriesRoutes = require('./lib/routes/breweries')

app.listen(8080, () => console.log('listening'))

app.use('/', breweriesRoutes)