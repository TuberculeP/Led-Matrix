const express = require('express')

const routerShitpost = express()

routerShitpost.get('/epoustouflan', (req, res) => {
    res.setHeader('Content-Type', 'image/png')
    res.sendFile("epoustouflan.png", {root: "./public"})
})

module.exports = routerShitpost