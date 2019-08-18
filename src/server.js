const express = require("express");
const path = require("path");
const logger = require("morgan");
const bodyParser = require("body-parser");

const { Post } = require('./db');

const LISTEN_PORT = 3000;

var app = express();

// Set view engine
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "assets/views"));

app.use(logger("short"));
app.use(bodyParser.urlencoded({ extended: false }))

// Set handler for static assets
const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));

app.get("/", function(request, response) {
    Post.findAll()
        .then(entries => {
            response.render("index", { entries: entries });
        });
});

app.get("/sign", function(request, response) {
    response.render("sign", { error: "Generic error" });
});

app.post("/sign", function(request, response) {
    // TODO :: Perform validation and sanitation of form data
    Post.create(request.body)
        .then(user => {
            
            response.redirect('/');
        }).catch(err => {
            var errMsg = "ERROR: Could not post a new entry: " + err;
            console.log(errMsg);
            response.render('sign', { error: errMsg });
        });
});

// Handle 404 errors
app.use(function(request, response) {
    response.statusCode = 404;
    response.end("Page not found.");
});

app.listen(LISTEN_PORT, function() {
    console.log("node-guestbook is active and listening on port " + LISTEN_PORT + "\n");
});