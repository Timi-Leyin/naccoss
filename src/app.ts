import express from "express";
import morgan from "morgan";
import getLogin from "./controllers/getLogin";
import path from "path";
import getVote from "./controllers/getVote";
/**
 ** MAIN APP 
 **/
const app = express()

// DISPLAY LOGGER WHEN NOT IN PRODUCTION MODE !!!!!!
process.env.NODE_ENV !="prod" && app.use(morgan("dev"))

// SET VIEWS **** EJS *****
app.set('views', path.join(__dirname, '../src/views')); 
app.set('view engine', 'ejs');

// SET STATIC ROUTE
app.use(express.static(path.join(__dirname,"public")))

// MIDDLEWARES
app.get("/login", getLogin )
app.get("/vote", getVote )

export default app