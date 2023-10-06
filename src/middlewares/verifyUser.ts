import { NextFunction, Request, Response } from "express";
import { ROLE } from "../models/Users";

const verifyUser = (req: any, res: Response, next: NextFunction) => {
  const user = req.cookies.loginReq;
  if (user) {
    req.user = user;
    return next();
  }
  return res.redirect("/login");
};

export const verifyAdmin = (req: any, res: Response, next: NextFunction) => {
  const user = req.cookies.loginReq;
  // console.log(user.admin)
  if (typeof user != "undefined" && user.admin == ROLE.admin) {
    req.user = user;
    return next();
  }
  return res.redirect("/vote");
};

export const disallowLogin = (req: any, res: Response, next: NextFunction) => {
  const user = req.cookies.loginReq;
  console.log(req.path, user);
  if (user && req.path == "/login") {
    req.user = user;
    return user.admin ? res.redirect("/admin") : res.redirect("/vote");
  }
  return next();
};

export default verifyUser;
