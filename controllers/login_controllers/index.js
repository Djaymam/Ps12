const userModel = require('../../models/session');
const jwt = require('jsonwebtoken');


exports.userLogin = async (req,res)=>{

    
    const {email,password}= req.body;

    const userinfo = await userModel.loginUser(email);
    //const userpassword = await userModel.checkPassword(password);

    if (!userinfo) {
        return res.status(401).json({
            error: 'Wrong Email'
        })
    }

    const passwordValidation = await userModel.loginPassword(password, userinfo.password);
    if (!passwordValidation) {
        return res.status(401).json({
            error: 'Wrong  Password'
        })
    }

    res.status(200).json(
        {
            name:userinfo.user_name,
            token:jwt.sign({ id:userinfo.id},process.env.AUTH_KEY,{expiresIn: '1d'})

        }
    )


}