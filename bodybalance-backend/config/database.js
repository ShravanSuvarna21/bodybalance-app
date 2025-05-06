import mongoose from 'mongoose'
const configDB=async()=>{
    try{
        mongoose.connect(process.env.DB_URL)
        console.log("DB is connected")
        }catch(err){
        }
}
export default configDB
