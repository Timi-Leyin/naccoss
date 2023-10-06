import { Request, Response } from "express";
import Votes from "../models/Votes";
import { ROLE } from "../models/Users";

export const getAdmin =(req:any, res:Response)=>{
  return  res.render("pages/admin/index",{
        title:"Admin",
        initial:req.cookies.loginReq.initial,
        isAdmin:req.user.admin == ROLE.admin
    })
}


export const createVote = async (req:any, res:Response)=>{
  const options = [];
  for(const opt in req.body){
    if(opt.includes("field-")){
      options.push(req.body[opt])
    }
  }

      const newVote= await Votes.create({
        title:req.body.title,
        userId:req.user.id,
        options:JSON.stringify(options),
        validThrough:new Date(req.body.validThrough)
        })
        newVote.save()

  res.redirect("/vote")
}