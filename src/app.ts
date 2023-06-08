import express from "express";
import morgan from "morgan";

/**
 ** MAIN APP 
 **/
const app = express()

// DISPLAY LOGGER WHEN NOT IN PRODUCTION MODE !!!!!!
process.env.NODE_ENV !="prod" && app.use(morgan("dev"))


// MIDDLEWARES


export default app