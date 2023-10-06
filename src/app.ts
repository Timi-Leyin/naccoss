import express from "express";
import morgan from "morgan";
import getLogin from "./controllers/getLogin";
import path from "path";
import getVote from "./controllers/getVote";
import postLogin from "./controllers/postLogin";
import verifyUser, { disallowLogin, verifyAdmin } from "./middlewares/verifyUser";
import cookieParser from "cookie-parser"
import postLogout from "./controllers/postLogout";
import postCountVote from "./controllers/postCountVote";
import getVoteByID from "./controllers/getVoteByID";
import { createVote, getAdmin } from "./controllers/admin";
import deleteVote from "./controllers/deleteVoteById";
/**
 ** MAIN APP 
 **/
const app = express()

// PARSE AS JSON
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// DISPLAY LOGGER WHEN NOT IN PRODUCTION MODE !!!!!!
process.env.NODE_ENV !="prod" && app.use(morgan("dev"))

// SET VIEWS **** EJS *****
app.set('views', path.join(__dirname, '../src/views')); 
app.set('view engine', 'ejs');

// SET STATIC ROUTE
app.use(express.static(path.join(__dirname,"public")))

// MIDDLEWARES
app.get("/login", disallowLogin, getLogin )
app.post("/login", postLogin )
app.get("/admin",verifyAdmin, getAdmin )
app.post("/admin/create-vote",verifyAdmin, createVote )
app.post("/admin/del-vote/:id",verifyAdmin, deleteVote )
app.get("/vote",verifyUser, getVote )
app.get("/vote/:id",verifyUser, getVoteByID )
app.post("/vote/count/:id",verifyUser, postCountVote )
app.post("/logout",verifyUser, postLogout )


app.use((req, res)=>{
    res.render("pages/notReady",{
        title:"Page Under Construction"
    })
})
export default app