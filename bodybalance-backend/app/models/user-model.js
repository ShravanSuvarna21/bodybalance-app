import mongoose from 'mongoose'
import { Schema,model } from 'mongoose'
const userSchema=new Schema({
name:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
},
contact: {
    type: String,
    required: true,
  },
role:{
    type:String,
    enum:['admin',"coach","client"],
    default:"coach"
},
isActive:{
    type:Boolean,
    default:true
},
isApproved:{
    type:Boolean,
    default:false
},  
assignedCoach: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
},
},{timestamps:true})
const User=model('User',userSchema)
export default User