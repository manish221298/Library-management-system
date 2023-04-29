const mongoose = require("mongoose")


const configureDb = () => {
    mongoose.set("strictQuery", false);
    mongoose.connect('mongodb://localhost:27017/library-management', {
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        // useCreateIndex: true,
        // useFindAndModify: false,
    })
    .then(() => {
        console.log("connected to db")
    })
    .catch(err => {
        console.log(err)
    })
}

module.exports = configureDb