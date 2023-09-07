const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    res.end("Javascript");
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

//command to run: node app.js
