import User from "../models/user-model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";
const userController = {};
userController.Register = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ errors: error.array() });
  }
  const { name, email, password, role,contact} = req.body;
  try {
    const user = new User({ name, email, password, role,contact });
    const salt = await bcryptjs.genSalt();
    const hash = await bcryptjs.hash(password, salt);
    const totalCount = await User.countDocuments();
    if (totalCount == 0) {
      user.role = "admin"
      user.isApproved = true;
    }
    if (totalCount > 0 && user.role == "admin") {
      return res.status(400).json({ Error: "Admin profile already exists" });
    }
    (user.password = hash), await user.save();
    res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "something went wrong" });
  }
};
userController.Login = async (req, res) => {
  console.log("req.Body",req.body)
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json({ errors: error.array()});
  }
  const { email, password } = req.body;
  
  try {
    const user = await User.findOne({ email });
 
    if (!user) {
      return res.status(404).json({ Notice: "Email or Password is invalid" });
      
    }
    const isVerified = await bcryptjs.compare(password, user.password);
    if (!isVerified) {
      return res.status(404).json({ Notice: "Email or Password is invalid" });
    }
    const payload = { userId: user._id, role: user.role };
    const token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: "10d",
    });
    res.json({ token: `${token}` });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "something went wrong" });
  }
};

userController.Account = async (req, res) => {
  try {
    const user=await User.findOne()
   return res.json(user)
  } catch (err) {
   return res.json(err);
  }
};
userController.singleAccount= async(req,res)=>{
    try{
        const user = await User.findById(req.userId)
        res.json(user);
    }catch (error){
        console.log(error);
        return res.status(500).json({Error:'Somehting Went wrong'});
    }
}
export default userController;
