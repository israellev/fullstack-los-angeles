 
const mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/my_database';
const PostService = require('./PostService');
const config = require('../config');

    
function initMongodb() {
        mongoose.connect(config.mongodb.url, {


        useNewUrlParser: true,
        useUnifiedTopology: true,

      
   
 })
 .then(()=> console.log(`connect mongo successfully`))
 .catch(eroor =>  console.log(`error`, error));
 mongoose.set('debug', true);
}


module.exports = initMongodb



