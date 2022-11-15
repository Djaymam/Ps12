const userModel = require('../../models/session');
const jwt = require('jsonwebtoken');


exports.userLogin = async (req,res)=>{

    
    const {email,password}= req.body;

    const userinfo = await userModel.loginUser(email);
    //const userpassword = await userModel.checkPassword(password);

    if (!userinfo) {
        return res.status(401).json({
            error: 'Wrong Email or Password'
        })
    }

    const passwordValidation = await userModel.loginPassword(password, userinfo.password);
    if (!passwordValidation) {
        return res.status(401).json({
            error: 'Wrong Email or Password'
        })
    }

    res.status(200).json(
        {
            name:userinfo.user_name,
            token:jwt.sign({ id:userinfo.id},"d3ddc7b93c75f7edc3fb6c8d04de8322e35cb6f8",{expiresIn: '1d'})

        }
    )


}