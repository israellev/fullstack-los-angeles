const { error } = require('console');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://danielperetz770:danielperetz4312@cluster0.zhxqk8b.mongodb.net/?retryWrites=true&w=majority', {

    useNewUrlParser: true,
    useUnifiedTopology: true,

})
.then(()=> console.log('connect mongo successflly'))
.catch(error => console.log('error',error))
