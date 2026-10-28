// Import express and env
import express from "express"
import { configDotenv } from "dotenv"
configDotenv()

const app = express()
const PORT = process.env.PORT || 2000

app.get("/", (req, res) => {
    res.status(201).send({ status: 201, message: "Simple Server with CI/CD pipline", suess: true })
})

const Start = () => {
    app.listen(PORT, () => {
        console.log(`Server is runing on Port: ${PORT}`);
    })
}

Start()