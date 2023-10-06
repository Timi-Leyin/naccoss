import { Request, Response } from "express"
import Votes from "../models/Votes"
import User, { ROLE } from "../models/Users"
import getChoicePercentage from "../utils/getChoicePercentage"
import getWinner from "../utils/getWinner"

const getVote = async (req:any, res:Response)=>{
    console.log(req.cookies.loginReq)
   const allVotes = await (await Votes.findAll()).map(v=> v.get())
    res.render("pages/vote",{title:"Vote", votes:allVotes,userId:req.cookies.loginReq.id,getChoicePercentage, userInfo:req.user,getWinner, initial:req.cookies.loginReq.initial,
    isAdmin:req.user.admin == ROLE.admin})
}

export default getVote