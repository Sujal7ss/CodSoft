import express from "express"
import JobList from "./assets/JobList.js"
const app = express()

app.get("/", (req, res) => {
    res.sendStatus(402)
})
app.get("/jobs", (req, res) => {
    res.json(JobList)
})
app.listen(8000, ()=>{
    console.log("Server listening on port 8000")
})