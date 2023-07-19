 const mongoose = require('mongoose');
 const postModel = require('./PostMongo');
 const config = require('./config')
//Set up default mongoose connection
initMongodb()
function initMongodb() {
    mongoose.connect(config.mongodb.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(()=> console.log(`yes mongoDB`))
    .catch(error=> console.log(`no mongoDB`, error))
    mongoose.set('debug', true);
  }

  module.exports = initMongodb