const Item = require("../modals/itemModel")

const itemController = {}

itemController.create = async(req, res) => {
    const body = req.body
    try{
        const item = new Item(body)
        await item.save()

        res.status(200).json(item)
    }
    catch(err){
        res.status(500).json({err: "server error"})
    }
}

// show list of books of single user
itemController.list = async(req, res) => {
    try{
        const items = await Item.find()

        res.status(200).json(items)
    }
    catch(err){
        res.status(500).json({err: "server error"})
    }
}

module.exports = itemController
