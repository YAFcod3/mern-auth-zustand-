import { Request,Response } from "express"
import jwt from "jsonwebtoken"
export const loginHandler=(req:Request,res:Response)=>{

  console.log('login')

  //recibir req.body
  //validaart
  //store in db
  //token generate

 const token= jwt.sign({
    test:"test"
  },'secret',{
    expiresIn:60*60*24

  })
   return res.json({
    token
   })
}



export const profileHandler=(req:Request,res:Response)=>{


  return res.json({
   profile: req.user,

    message:"Profile data"
  })

}

