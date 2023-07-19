const mongoose = require('mongoose')
const config = 'mongodb+srv://saharKlapish:qu0dYDWYi8FyNVG1@sahar.byfba1b.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(config, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> console.log('connect mongo succesfully'))
.catch(error => console.log('error', error))
