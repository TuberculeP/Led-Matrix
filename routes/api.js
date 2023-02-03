const express = require('express');
const cors = require('cors')
const routerApi = express();

routerApi.use(cors())

let callAmount = 0

routerApi.get('/', (req,res) => {
    callAmount++
    res.json({msg: "Welcome to the API", call: callAmount})
})

routerApi.get('/user', (req,res) => {
    res.json({user: "Moi"})
})

ledArray = []
for(let i=0; i<256; i++){
    ledArray.push([0,0,0])
}

routerApi.get('/grid', (req, res) => {
    res.json(ledArray)
})

function calcIndex(i, size){
    let index = i
    if(Math.floor(i/size)%2 === 1){
        index = (size*(Math.floor(i/size)+1)) - (i%size + 1)
        console.log("ligne numéro "+(Math.floor(i/size)+1), "cellule numéro "+i%16)
    }
    return index
}

routerApi.post("/grid", (req, res) => {
    const info = req.body
    console.log(info.index, info.value)
    ledArray[calcIndex(info.index, 16)] = info.value
    res.json({status: 200})
})

routerApi.delete("/grid", (req, res) => {
    let newTab = []
    for(let i=0; i<256; i++){
        newTab.push([0,0,0])
    }
    ledArray = newTab
})


module.exports = routerApi