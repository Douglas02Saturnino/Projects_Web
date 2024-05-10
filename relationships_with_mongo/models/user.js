const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/relationships', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Mongoose connected");
    })
    .catch(err => {
        console.log("Mongoose connection error");
        console.log(err);
    });

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [
        {
            street: String,
            city: String,
            state: String,
            country: String
        }
    ]
})

const User = mongoose.model('User', userSchema);

const makeUser = async () => {
    const u = new User({
        first: 'Harry',
        last: 'Potter'
    })
    u.addresses.push({
        street: '123 Sesame St.',
        city: 'New York',
        state: 'NY',
        country: 'USA'
    })
    const res = await u.save();
    console.log(res);
}


const addAddress = async (id) => {
    const user = await User.findById(id);
    user.addresses.push(
        {
            street:'99 3rd St.',
            city: 'New York',
            state: 'NY',
            country: 'USA'
        }
    )
    const res = await user.save();
    console.log(res);
}

makeUser();