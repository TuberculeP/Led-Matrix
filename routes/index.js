const express = require('express');
const routerIndex = express();

routerIndex.get('/', (req,res) => {
    res.json({msg: "Hello World !"})
})

module.exports = routerIndex