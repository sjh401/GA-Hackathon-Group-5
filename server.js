import express from "express"
import cors from "cors"
import morgan from "morgan"
import db from "./db/index.js"
import routes from "./routes/index.js"

const app = express()
const PORT = process.env.PORT || 4567

app.use(express.json())
app.use(cors())

app.use(morgan("dev"))

app.use("/api", routes)

app.get("/", (req, res) => res.send("API DOCUMENTATION"))

db.on("connected", () => {
  console.log("Connected to MongoDB")
  app.listen(PORT, () => console.log(`Connected on port: ${PORT}`))
})