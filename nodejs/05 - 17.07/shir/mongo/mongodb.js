 
const mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/my_database';
const PostService = require('./PostService')

    
function initMongodb() {
        mongoose.connect(`mongodb+srv://shirmalka32:uhrVjQt0618DufOe@cluster0.fpm3vdz.mongodb.net/?retryWrites=true&w=majority`, {


        useNewUrlParser: true,
        useUnifiedTopology: true,

      
   
 })
 .then(()=> console.log(`connect mongo successfully`))
 .catch(eroor =>  console.log(`error`, error));
 mongoose.set('debug', true);
}


module.exports = initMongodb



