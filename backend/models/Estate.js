const mongoose = require('mongoose')
const { Schema } = mongoose

const estateSchema = mongoose.Schema({
    title: String,
    location: String,
    description: String,
    price: Number,
    image: String,
    status: Boolean,
})

module.exports = mongoose.model('Estate', estateSchema)