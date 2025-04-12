const express = require('express');
const app = express();

const jokes = [
    "Why dont scitenist trust atom ? Beacause Thye make up everthing!",
     "What did the ocean say to Beach? Nothing , it jus waved" ,
     "why dont programmers like nature?Too many Bugs"
];

app.get('/joke',(req,res)=>{
    const randomIndex = Math.floor(Math.random() * jokes.length)
    res.send( { joke: jokes[randomIndex] })
});

app.get('/',(req,res)=>{
    res.send("Welcome to Joke Api! vist /joke to get randome joke")
});

app.listen(3000,()=>{
    console.log("Joke Api  SERVER IS RUNNING ON 3000")
})