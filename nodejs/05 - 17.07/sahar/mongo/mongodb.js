const mongoose = require('mongoose')
const config = require('../config')

function initMongodb() {
    mongoose.connect(config.mongoDb.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=> console.log('connect mongo succesfully'))
    .catch(error => console.log('error', error))
    mongoose.set('debug',true);
}

module.exports = initMongodb