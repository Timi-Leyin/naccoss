import { Request, Response } from "express";
import User, { ROLE } from "../models/Users";

const postLogin = async (req: any, res: Response) => {
  const { matric, password } = req.body;
  if (!matric || !password) {
   return res.render("pages/login", { title: "Login", error: "Invalid Credentials" });
  }

  const userExists = await User.findOne({
    where: {
      matric,
    },
  });

  if (userExists) {
    // check for password
    const confirmUser = await User.findOne({
      where: {
        matric,
        password,
      },
    });

    if (confirmUser) {
      const user = await confirmUser.get();
      const setUser = {
        _id: user.id,
        matric: user.matric,
        initial: user.firstName[0] + user.lastName[0],
        id: user.uuid,
        admin: user.role,
      };
      console.log(user.role == ROLE.admin);
      if (user.role == ROLE.admin) {
        return res
          .cookie("loginReq", setUser, {
            maxAge: 900000,
            httpOnly: true,
          })
          .redirect("/admin");
      }
      return res
        .cookie("loginReq", setUser, {
          maxAge: 900000,
          httpOnly: true,
        })
        .redirect("/vote");
    }
    return res.render("pages/login", {
      title: "Login",
      error: "Incorrect Password",
    });
  }
 return res.render("pages/login", { title: "Login", error: "User Not Found" });
};

export default postLogin;
