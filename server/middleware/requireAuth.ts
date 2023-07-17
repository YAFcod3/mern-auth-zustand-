import { Request,Response,NextFunction } from "express";
import jwt from "jsonwebtoken";


export const requiereAuth=(req:Request,res:Response,next:NextFunction)=>{


//1
  const authHeader= req.headers.authorization
//2
  if(!authHeader) return res.status(401).json({
    message:'Unauthorized'

  })

//3
  const token = authHeader.split(' ')[1]
  if (!token){
    return res.status(401).json({
      message:'Unauthorized'
  
    })

  }

//4
  jwt.verify(token,'secret',(err,data)=>{

    if(err) return res.status(401).json({
      message:'Unauthorized'
  
    })

    // console.log(data)
    req.user=data
    next()

  })








}