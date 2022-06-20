const mongoose = require('mongoose')
const { Schema } = mongoose

const estateSchema = mongoose.Schema({
    title: String,
    location: String,
    description: String,
    price: Number,
    image: String,
    status: {
        type: Boolean,
        default: false
    },
})

module.exports = mongoose.model('Estate', estateSchema)