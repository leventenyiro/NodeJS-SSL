const https = require("https")
const express = require("express")
const path = require("path")
const fs = require("fs")
const app = express()

app.use("/", (req, res, next) => {
    res.send("Hello from SSL server")
})

app.listen(3000, () => {
    console.log("Server is running")
})

const sslServer = https.createServer({
    key: fs.readFileSync(path.join(__dirname, "cert", "key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "cert", "cert.pem"))
}, app)

sslServer.listen(3443, () => console.log("Secure server on port 3443"))