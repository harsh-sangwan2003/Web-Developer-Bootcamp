const express = require('express');
const app = express();

// "/" -> "Hi there, welcome to my assignment!"
app.get("/", (req, res) => {
    res.send("Hi there, welcome to my assignment!");
})


// "speak/pig" -> "The pig says Oink"
// "speak/cow" -> "The cow says Moo"
// "speak/dog" -> "The dog says Woof Woof"
app.get("/speak/:animal", (req, res) => {

    const animal = req.params.animal;

    if (animal == 'pig')
        res.send(`The pig says Oink`);

    else if (animal == 'cow')
        res.send(`The cow says Moo`);

    else
        res.send(`The dog says Woof Woof`);
})


// "repeat/hello/3 -> "hello hello hello"
// "repeat/hello/5 -> "hello hello hello hello hello"
// "repeat/blah/2 -> "blah blah"
app.get("/repeat/:word/:id", (req, res) => {

    const word = req.params.word;
    const id = req.params.idl
    let str = "";

    if (word == 'hello') {

        for (let i = 0; i < id; i++)
            str += "hello ";
    }

    else {

        for (let i = 0; i < id; i++)
            str += "blah ";
    }

    str.trim();
    res.send(str);
})

// "*" -> "Sorry, page not found... What are you doing with your life?"
app.use((req, res) => {
    res.send("Sorry, page not found... What are you doing with your life?")
})

app.listen(3000, () => {
    console.log("Backend server is running!");
})