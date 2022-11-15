const db = require('../database/');
const bcrypt = require('bcrypt');


class session {
    //validate user
    static async loginUser(email){
        
        try {
            const userinfo= await db.query("SELECT * FROM user_info WHERE email=$1",[email]);
            //console.log(userinfo)
            return userinfo.rows[0];
        } catch (error) {
            console.log(error)
        }
    }
    //validade the password 
    static async loginPassword(password, passwordhash){

        return await bcrypt.compare(password, passwordhash);
    }
}

module.exports = session;