import jwt from 'jsonwebtoken'
const userAuthenticate=async(req,res,next)=>{
    const token=req.headers['authorization']
    if(!token){
        res.status(404).json({error:'please enter the token'})
    }
    try{
        //  const tokenExtract = token.split(' ')[1]
        const tokenData = jwt.verify(token, process.env.SECRET_KEY);
    req.userId = tokenData.userId;
    req.role = tokenData.role;
    next();

    }catch(err){
        return res.status(500).json(err);
    }
}
export default userAuthenticate