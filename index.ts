import dotenv from "dotenv"
dotenv.config()
import app from "./src/app"
import { PORT } from "./src/configs/constants"
import listen from "./src/utils/listen"


app.listen(PORT,listen)