import dotenv from "dotenv"
dotenv.config()
import app from "./src/app"
import { PORT } from "./src/configs/constants"
import listen from "./src/utils/listen"
import database from "./src/configs/database"
import User, { ROLE } from "./src/models/Users"
import Votes from "./src/models/Votes"


database.sync({
    force:false
})
.then(() => console.log("Synced SQL Database 😎"))
.catch((err) => console.log("Error Could Not Sync SQL Database",err));


// (async()=>{
//     const s= await User.create({
//          matric:"R2022/620/005",
//          password:"password",
//          firstName:"David",
//          lastName:"Areegbe",
//          email:"timileyinoyelekan@gmail.com",
//         //  root:true,
//         //  role:ROLE.admin,
//      })
//      s.save()
//  })()



app.listen(PORT,listen)