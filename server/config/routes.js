const express = require("express")
const router = express.Router()     

const userController = require("../controllers/userController")
const bookController = require("../controllers/bookController")
const itemController = require("../controllers/itemController")

//add user name
router.post('/adduser', userController.create)
router.post('/user/authentication', userController.list)
// router.put('/updateuser/:id', userController.updateUser)


// add book in book store
router.post("/addbook", bookController.create)
router.get("/getbook", bookController.list)
// router.put("/updatebook/:id", bookController.updateBook)

//item add
router.post("/additem", itemController.create)
router.get("/itemlist", itemController.list)
// router.get("/user/booklist/:id", itemController.bookList)


module.exports = router