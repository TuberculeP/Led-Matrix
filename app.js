//config
const express = require('express');
const app = express();

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

//routes
let RouterIndex = require('./routes/index')
app.use("/", RouterIndex)
let RouterApi = require('./routes/api')
app.use("/api", RouterApi)
let RouterShitpost = require('./routes/shitpost')
app.use("/shitpost", RouterShitpost)
module.exports = app