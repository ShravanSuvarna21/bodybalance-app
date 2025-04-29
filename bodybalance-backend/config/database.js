import mongoose from 'mongoose'
const configDB=async()=>{
    try{
        mongoose.connect(process.env.DB_URL)
        }catch(err){
        }
}
export default configDB
