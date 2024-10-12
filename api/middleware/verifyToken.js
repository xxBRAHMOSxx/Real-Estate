import jwt from "jsonwebtoken"

export const verifyToken = async (req,res,next) => {
     // check for token
     const token = req.cookies.token
     if(!token) return res.status(401).json({message:"login first"})
         //now verify if the token is valid
     //in this case the payload is user information
     jwt.verify(token,process.env.JWT_SECRET_KEY,async (err,payload) => {
         if(err) return res.status(403).json({message:"Token is not valid"})
            req.userId = payload.id;
        next()
         })
    
}