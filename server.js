const http = require('http')
const app = require('./app')
const {Server} = require('socket.io')

server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: "*",
    },
})

io.on('connection', (socket) => {
    console.log("Connected")
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
    socket.on("updateLED", (data) => {
        fetch('http://localhost:3000/api/grid', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => response.json()).then(data => {
            socket.emit('postStatus', data)
        })
    })
})

server.listen(3000, ()=>{
    console.log('listening...')
})