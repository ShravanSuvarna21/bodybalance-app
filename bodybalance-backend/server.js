import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import configDB from './config/database.js'
import { checkSchema } from 'express-validator'
import { userRegisterValidation,userLoginValidation} from './app/validators/user-validator.js'
import userController from './app/controllers/user-controller.js'
import userAuthenticate from './app/middlewares/userAuthenticate.js'
import userAuthorization from './app/middlewares/userAuthorization'
// import IdValidation from './app/validators/id-validator.js'

const app=express()
dotenv.config()
configDB()
app.use(cors());
app.use(express.json())
const port =process.env.PORT

//register,login
app.post('/user/register',checkSchema(userRegisterValidation),userController.Register)
app.post('/user/login',checkSchema(userLoginValidation),userController.Login)
app.get('/user/account',userAuthenticate,userAuthorization(['admin']),userController.Account)
app.get('/account',userAuthenticate,userAuthorization(['admin','coach','client']),userController.singleAccount)//try to get single account
app.listen(port,()=>{
    console.log('app is running on port',port)
})