const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    res.write("Javascript");
    res.end();
});

server.listen(port, (err) => {
    if (err) console.log("there was an error: ", err);
    else console.log("server is running on http://localhost:" + port);
});

//node app.js