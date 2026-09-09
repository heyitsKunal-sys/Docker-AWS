import express from "express"
import { createServer } from "http"
import { Server } from "socket.io"
import { YSocketIO} from "y-socket.io/dist/server"



const app = express()
const httpServer = createServer(app)


const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
})

const ySocketIO = new YSocketIO(io)
ySocketIO.initialize()


app.get("/", (req, res) => {
    res.status(200).json({
        message: "hello world",
        success: "true"
    })
})
app.get('/health', (req, res) => {
    res.status(200).json({
        message: "ook",
        success: "true"
    })
})
// this is a health check route that tells a monitoring tool " iam working".
// it acts like a digital plus monitor. if ur app stops responding to this route, the monitoring system knows it is frozen or crashed and automatically restarts it.

httpServer.listen(3000, () => {
    console.log("Server is running on port 3000")
})