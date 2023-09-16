const http = require("http");
const {sum} = require("./helper");
const server = http.createServer((req, res) => {
    res.end( sum(5,2));
});
server.listen(3000);
