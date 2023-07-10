import * as mongoose from 'mongoose'
import {User} from './userSchema';

// mongodb/database/collections
mongoose.connect('mongodb+srv://israellev770:eXb57AKhbMEPTDAD@cluster0.5q2k4o8.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Could not connect to MongoDB...', err));

const newUser = new User({
    name: 'John Doe 3',
    email: 'john3@example.com',
    password: 'password123'
});

newUser.save()
    .then(() => console.log('User saved'))
    .catch((err) => console.log('Error: ', err));

// To fetch all users:
User.find()
    .then(users => console.log(users))
    .catch(err => console.error('Error: ', err));

// To find a specific user:
User.findOne({ name: 'John Doe' })
    .then(user => console.log(user))
    .catch(err => console.error('Error: ', err));

// To update a user:
User.findOneAndUpdate({ name: 'John Doe' }, { name: 'Johnny Doe' })
    .then(() => console.log('User updated'))
    .catch(err => console.error('Error: ', err));

// To delete a user:
User.findOneAndDelete({ name: 'Johnny Doe' })
    .then(() => console.log('User deleted'))
    .catch(err => console.error('Error: ', err));

