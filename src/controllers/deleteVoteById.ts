import { Request, Response } from "express"
import Votes from "../models/Votes"

const deleteVote  = async(req:Request, res:Response)=>{


    const singleVote = await (await Votes.destroy({
        where:{
            uuid: req.params.id
        }
    }))
    
res.redirect("/vote")

}

export default deleteVote