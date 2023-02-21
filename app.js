const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
        JSON.stringify({
            data: "Hello, world",
        })
    );

});
console.log(`Server is Running at http://localhost:${PORT}`)
server.listen(PORT);