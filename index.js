const express = require('express')
const app = express()
const breweriesRoutes = require('./lib/routes/breweries')
const parser = require("body-parser");
const cors = require('cors')

app.use(parser.json());
app.use(cors())

app.listen(8080, () => console.log('listening'))

app.use('/breweries', breweriesRoutes)

