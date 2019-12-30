const mongoose = require('mongoose')


let mongoURI = ""

if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
  } else {
    mongoURI = "mongodb://localhost/breweries";
  }

mongoose.Promise = Promise

mongoose.connect(mongoURL, {
    useNewUrlParser : true,
    useUnifiedTopology: true
})
    .then(feedback => console.log('connected'))
    .catch( error => console.log('errrrorrr', error))

module.exports = mongoose