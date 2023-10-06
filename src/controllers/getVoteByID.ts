import { Request, Response } from "express"
import Votes from "../models/Votes"
import getChoicePercentage from "../utils/getChoicePercentage"
import getWinner from "../utils/getWinner"
import { ROLE } from "../models/Users"

const getVoteByID=async(req:any, res:Response)=>{

    const singleVote = await (await Votes.findOne({
        where:{
            uuid: req.params.id
        }
    }))
    
    res.render("pages/singleVote",{title:"Vote "+ req.params.id, vote:singleVote,userId:req.cookies.loginReq.id,getChoicePercentage, userInfo:req.user,getWinner, initial:req.cookies.loginReq.initial,
    isAdmin:req.user.admin == ROLE.admin})
}

export default getVoteByID