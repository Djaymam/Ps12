const userModel = require('../models/index')
const bcrypt = require('bcrypt');
const dataSchema = require('../controllers/data_schema');



//gething all users info
exports.getusers = async (req, res) => {
    
    const users = await userModel.getUser();
    //console.log(users)
    res.status(200).json(users);
};

//creating new user 
exports.createuser = async (req, res) => {
    
    
    const result = await dataSchema.validateAsync(req.body)
    //console.log(result)
    const encryptPassword = await bcrypt.hash(result.password,5)
    //console.log(encryptPassword)
    const checkEmail = await userModel.checkemail(result.email);
    //console.log(checkEmail)
    const checkUserName = await userModel.checkName(result.user_name);
    //console.log(email)
    //console.log(checkEmail)
    //console.log(checkUserName)

    if (checkUserName==true) {

        return res.status(406).send("UserName already taken")
    }
    if (checkEmail==true) {

        return res.status(406).send("Email already taken")
    }

    const user = await userModel.creatUser(result.name,result.user_name,result.email,encryptPassword);
    
    //console.log(user)
    res.status(201).json(user)
    
    
};


exports.updateUser = async (req, res) =>{
    const {id}= req.params;
    const {name,user_name,email} = req.body;

    await userModel.updateUser(id,name,user_name,email);
    res.status(200).json("User Updated");
}

exports.deleteUser = async (req, res) =>{
    const {id} = req.params; 
    await  userModel.deleteUser(Number(id));

    res.status(201).send("User deleted!");

}