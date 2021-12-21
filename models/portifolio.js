const mongoose = require('mongoose')
const slug = require('slug')

const { Schema } = mongoose

const PortifolioSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    slug: {
        type: String,
        unique: true,
        required: true,
        default: function (){return slug(this.title)}
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
})

module.exports = mongoose.model('portifolio', PortifolioSchema);