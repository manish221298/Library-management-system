const User = require("../modals/userModel")

const userController = {}

// add user to our database 
userController.create = async(req, res) => {
    const body = req.body

    try{
        const user = new User(body)

        await user.save()
        res.status(200).json({data: "added user successfully"})
    }
    catch(err){
        res.json({msg: "error"})
    }
}

// user find by name for login

userController.list = async (req, res) => {
  const { name } = req.body;

  try {
    const users = await User.findOne({name});
    if (!users) {
      throw new Error('User not found');
    }
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(404).json({ err: 'User not found' });
  }
};

  


module.exports = userController