const mongoose = require("mongoose")

const bookSchema = mongoose.Schema({
    bookName: {type: String, required: true},
    status: {type: Boolean, default: true}
},
{timestamps: true}
)


module.exports = mongoose.model('bookModel', bookSchema)