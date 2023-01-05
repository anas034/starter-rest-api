require("dotenv").config()
const http = require('http')
const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const { upload_image } = require("./upload_image")

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

app.use(fileUpload({
    useTempFiles: true
}))


app.post('/upload', upload_image)
app.get('*', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end("<h1 style=text-align:center>Test Upload Api - 2023</h1>");
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


module.exports = app