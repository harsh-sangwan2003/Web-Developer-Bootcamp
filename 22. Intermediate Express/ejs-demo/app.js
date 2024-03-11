const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.render('home.ejs');
})

app.get('/fallinlovewith/:thing', (req, res) => {

    const name = req.params.thing;
    res.render('love.ejs', { name });
})

app.get('/posts', (req, res) => {

    const posts = [
        { title: "Post 1", author: "Susy" },
        { title: "Post 2", author: "Charlie" },
        { title: "Post 2", author: "Colt" },
    ]

    res.render('posts.ejs', { posts });
})

app.listen(3000, () => {
    console.log("Backend server is running!");
})