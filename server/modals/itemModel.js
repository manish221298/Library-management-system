const mongoose = require("mongoose")

const itemSchema = mongoose.Schema({
    bookId: {type: String, required: true},
    bookName: {type: String},
    bookRent: {type: String},
    days: {type: String},
    email: {type: String},
    userId: {
        type:String
    }
},
{timestamps: true}
)


module.exports = mongoose.model('itemModel', itemSchema)