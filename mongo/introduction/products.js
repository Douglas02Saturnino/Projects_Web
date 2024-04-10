const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/shopApp", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connection Open!!")
    })
    .catch(err => {
        console.log("Oh no Error!!")
        console.log(err)
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    }
});

const Product = mongoose.model('Product', productSchema);
// const bike = new Product({ name: 'Tire Pump', price: 19.50, categories: ['Cycling'] })
// bike.save()
//     .then(data => {
//         console.log("It Worked!")
//         console.log(data);
//     })
//     .catch(err => {
//         console.log("Oh no Error!")
//         console.log(err);
//     })

Product.findOneAndUpdate({ name: 'Tire Pump' }, { price: -10.99 }, { new: true})
.then(data => {
    console.log("It Worked!")
    console.log(data);
})
.catch(err => {
    console.log("Oh no Error!")
    console.log(err);
})