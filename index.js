const express = require('express')
const userController = require('./controllers')
const loginController = require('./controllers/login_controllers');
const auth = require('./middleware/auth');
require('dotenv').config()





const app = express()
const port = 3005


app.use(express.json())


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


app.listen(3005, () => {
  console.log(`App listening on http://localhost:${port}`);
});
