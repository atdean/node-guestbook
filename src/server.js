const express = require("express");
const path = require("path");

const LISTEN_PORT = 3000;

var app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "assets/views"));

app.use(function(request, response, next) {
    console.log(request.method + " " + request.url);

    next();
});

app.use(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello!");
});

app.listen(LISTEN_PORT, function() {
    console.log("node-guestbook is active and listening on port " + LISTEN_PORT);
});