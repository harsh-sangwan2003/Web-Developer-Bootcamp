const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

let friends = ['Tony', 'Miranda', 'Justin', 'Pierre', 'Lily'];

app.get('/', (req, res) => {

    res.render('home');
})

app.get('/friends', (req, res) => {

    res.render('friends', { friends });
})

app.post('/addfriend', (req, res) => {

    let friend = req.body.friend;
    friends.push(friend);
    res.redirect('/friends');
})

app.listen(3000, () => {

    console.log("Backend server is running!");
})