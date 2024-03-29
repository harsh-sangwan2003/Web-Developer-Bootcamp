const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render('home');
})

app.get('/fallinlovewith/:thing', (req, res) => {

    const name = req.params.thing;
    res.render('love', { name });
})

app.get('/posts', (req, res) => {

    const posts = [
        { title: "Post 1", author: "Susy" },
        { title: "Post 2", author: "Charlie" },
        { title: "Post 2", author: "Colt" },
    ]

    res.render('posts', { posts });
})

app.listen(3000, () => {
    console.log("Backend server is running!");
})