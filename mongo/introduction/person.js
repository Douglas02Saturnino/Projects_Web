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
    first: String,
    last: String,
})

personSchema.virtual('fullName').get(function () {
    return `${this.first} ${this.last}`
})

personSchema.pre('save', async function () {
    this.first = "YO";
    this.last = "MAMA";
    console.log("About to save!!")
})

personSchema.post('save', async function () {
    console.log("Just Saved!!")
})


const Person = mongoose.model('Person', personSchema);