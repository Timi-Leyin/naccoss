import { Request, Response } from "express"

const postLogout = (req:Request, res:Response)=>{
    res.cookie("loginReq",null,{
        maxAge: -900000, httpOnly: true
    }).redirect("/login")
}

export default postLogout