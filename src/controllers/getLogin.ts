import { Request, Response } from "express"

const getLogin = (req:Request, res:Response)=>{
    res.render("pages/login",{title:"Login"})
}

export default getLogin