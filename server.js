const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Set EJS as the view engine
app.set("view engine", "ejs");

// Serve static files from the current directory
app.use(express.static(__dirname));

app.set('views', [
    path.join(__dirname, 'views'),
    path.join(__dirname, 'projects')
  ]);

// Serve index page
app.get("/", (req, res) => {
    res.render("index");
});

// Serve the project case study page
app.get("/projects/Event-Driven-Pipeline", (req, res) => {
    res.render("Event-Driven-Pipeline");
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
