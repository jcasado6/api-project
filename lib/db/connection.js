const mongoose = require('mongoose')

const mongoURL = 'mongodb://localhost/breweries'

mongoose.Promise = Promise

mongoose.connect(mongoURL, {
    useNewUrlParser : true,
    useUnifiedTopology: true
})
    .then(feedback => console.log('connected'))
    .catch( error => console.log('errrrorrr', error))

module.exports = mongoose