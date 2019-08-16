const express = require("express");
const path = require("path");
const logger = require("morgan");

const LISTEN_PORT = 3000;

var app = express();

// Set view engine
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "assets/views"));

app.use(logger("short"));

// Set handler for static assets
const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));

app.get("/", function(request, response) {
    response.render("index");
});

// Handle 404 errors
app.use(function(request, response) {
    response.statusCode = 404;
    response.end("Page not found.");
});

app.listen(LISTEN_PORT, function() {
    console.log("node-guestbook is active and listening on port " + LISTEN_PORT);
});