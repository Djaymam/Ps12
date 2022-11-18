const express = require('express');
require('dotenv').config();
const userController = require('./controllers');
const loginController = require('./controllers/login_controllers');
const auth = require('./middleware/auth');


const app = express()
//const port = 3005

app.use(express.json())

app.get('/',(req,res)=>{
    res.status(200).send(" Available routes: /createuser || /login || /users || /updateinfo/:id || /delete/:id")
})
//create user and password
app.post('/createuser', userController.createuser);
//create session
app.post('/login',loginController.userLogin)

app.use(auth)

//get all users
app.get('/users', userController.getusers);

//updade user info
app.put('/updateinfo/:id',userController.updateUser)

//delet User accont
app.delete(`/delete/:id`,userController.deleteUser)


app.listen(process.env.PORT|| 3005,()=>{console.log(process.env.PORT)});
