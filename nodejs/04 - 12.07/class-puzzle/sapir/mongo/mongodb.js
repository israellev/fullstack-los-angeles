const mongoose = require ('mongoose')
const config = require('./config')
const postService = require ('./postService')

function initMongodb(){
    mongoose.connect(config.mongodb.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> console.log('connect mongo succesfully'))
.catch(error => console.log('error', error))
mongoose.set('debug', true);//כל פעולה שהוא עושה ידבג תוך כדי ההתחברות לשרת זה לצורך איתור תקלות
}


module.exports = initMongodb