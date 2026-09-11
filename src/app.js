import express from "express"
import cors from "cors"
import cookieparser from "cookie-parser"
import { router } from "./routes/user.routes.js"

const app = express()

app.use(cors({
    origin: "http://127.0.0.1:5500",
    credentials: true
}))

app.use(express.json({limit: "15kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieparser())




app.use("/api/v1/users", router)

export {app}