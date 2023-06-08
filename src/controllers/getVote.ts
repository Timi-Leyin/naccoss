import { Request, Response } from "express"

const getVote = (req:Request, res:Response)=>{
    res.render("pages/vote",{title:"Vote"})
}

export default getVote