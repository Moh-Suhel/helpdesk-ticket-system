import express from "express"
import cors from "cors"
import cookieparser from "cookie-parser"
import { router } from "./routes/user.routes.js"

const app = express()

app.use(cors({
    origin: "https://roaring-choux-fac925.netlify.app/",
    credentials: true
}))

app.use(express.json({limit: "15kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieparser())




app.use("/api/v1/users", router)

export {app}