const db = require('../database/');



class user {
    static async creatUser(name,username,email,password) {
        try {
           await db.query("INSERT INTO user_info (name,user_name,email,password) VALUES ($1,$2,$3,$4)",[name,username,email,password])
           //console.log(user) 
           const userId = await db.query("SELECT id FROM user_info WHERE email=$1",[email]);
            // const usser = await this.getUser();
           return userId.rows[0];
        } catch (error) {
            console.log(error)
        }
    }

    static async getUser(){
        try {
           const usersDB = await db.query("SELECT * FROM user_info;");
    
            return usersDB.rows;
        } catch (error) {
            console.log(error)
        }
    }
    static async updateUser(id,name,user_name,email) {
        try {
            await db.query("UPDATE user_info SET name=$1, user_name=$2, email=$3 WHERE id=$4",[name,user_name,email,id]);
        } catch (error) {
            console.log(error)
        }
    }

    static async deleteUser(id){

        try {
            await db.query("DELETE FROM user_info WHERE id=$1",[id]);
        } catch (error) {
            console.log(error)
        }
    }
    static async checkemail(email){
        console.log(email)
        try {
            const userEmail = await db.query("SELECT email FROM user_info WHERE email=$1",[email]);
            //console.log("email"+userEmail.rows[0]);
            if (!userEmail.rows[0]) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.log(error)
        }
    }

    static async checkName(user_name){

        try {
            const user_Name = await db.query("SELECT user_name FROM user_info WHERE user_name=$1",[user_name]);
            //console.log("user_name"+user_Name.rows[0])
            if (!user_Name.rows[0]) {
                return true;
            } else {
                return false;
            }
        
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = user