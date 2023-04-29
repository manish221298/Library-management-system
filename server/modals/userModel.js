const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    bookId: {
        type: mongoose.Schema.Types.Mixed
      },
    rent: {type: Number, default: 0}
}, 
{timestamps: true}
)

module.exports = mongoose.model('userModel', userSchema)