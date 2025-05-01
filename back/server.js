require("dotenv").config();
const http = require("http");
const app = require("./app");

const server = http.createServer(app);
const port = normalizePort(process.env._PORT || 2000);
app.set("port", port);

function normalizePort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) return val;
    if (port > 0) return port;
    return false;
}

server.on("listening", () => {
    console.log(`Server is listening on ${server.address().address}:${server.address().port}`);
});

server.on("error", (err) => {
    if (err.syscall !== "listen") {
        throw err;
    }
    switch (err.code) {
        case "EACCES":
            console.error("Server requires elevated privilegies");
            process.exit(1);
            break;

        case "EADDRINUSE":
            console.error("Server is already in use");
            process.exit(1);
            break;

        default: throw err;
    }
});

server.listen(port);