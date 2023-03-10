const http = require('http');
const fs = require('fs');
const PORT = 3000;

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.readFile("pages/home.html", "utf8", (err, data) => {
            if (err) throw err;
            res.write(data);
        })
    }
    if (req.url === '/about') {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write('<h1>I am About Page</h1>')

    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write('<h1>Page Not Found</h1>');

    }
    res.end();
});
console.log(`Server is Running at http://localhost:${PORT}`)
server.listen(PORT);