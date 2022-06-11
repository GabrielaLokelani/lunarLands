const mongoose = require('mongoose')
const { Schema } = mongoose


const userSchema = mongoose.Schema({
    username: {
        type: String,
        validate: {
            validator: (username) => {
                const regex = /^[a-zA-Z\d\-_]+$/
                const match = regex.test(username)
                return match
            },
            message: 'Username must be numbers and letters only.'
        },
        unique: [true, "Username already taken!"],
        minLength: [5, "Username must be at least 5 chars length."],
        required: [true, 'Username required.']
    },
    password: String,
    userImageUrl: {
        type: String,
        validate: {
            validator: (imageUrl) => {
                const regex = /^https?:\/\//
                const match = regex.test(imageUrl)
                return match
            },
            message: 'Image url must begin with http:// or https://'
        },
        required: [false, 'Image url can be set in user settings.']
    },
    cart: [{type: Schema.Types.ObjectId, ref: 'Estate'}],
    likedEstates: [{type: Schema.Types.ObjectId, ref: 'Estate'}]
})

module.exports = mongoose.model('User', userSchema)