var express = require('express');
var app = express();

// "/" -> "Hi there!"
app.get('/', (req, res) => {

    res.send("Hi there!");
})

// "/bye" -> "Goodbye!"
app.get('/bye', (req, res) => {

    res.send("Goodbye!");
})

// "/dog" -> "MEOW!"
app.get('/dog', (req, res) => {

    res.send("MEOW!");
})

// params
app.get("/r/:name", (req, res) => {

    var name = req.params.name;
    res.send("Hello " + name.toUpperCase());
})

// "*" route
app.get("*", (req, res) => {

    res.send("You are a star!");
})

// app.use((req, res) => {

//     res.send("You are a star!");
// })

app.listen(3000, () => {
    console.log("Backend server is running.");
})