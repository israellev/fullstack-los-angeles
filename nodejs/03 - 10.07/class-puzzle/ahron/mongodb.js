const  mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ahron:cUmn2oN4o3ZeVjaM@cluster0.wq0oulc.mongodb.net/?retryWrites=true&w=majority', { 
    useNewUrlParser: true, useUnifiedTopology: true
 })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Could not connect to MongoDB...', err));
