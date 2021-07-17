const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send("Authors API");
})
app.get('/authors/:id', (req,res) => {
    let id= req.params.id;
    const authors = [
        'Lawrence Nowell, UK',
        'William Shakespeare, UK',
        'Charles Dickens, US',
        'Oscar Wilde, UK',
      ]
      res.send(authors[id - 1]);
})
app.get('/:bookNum/books', (req,res) => {
    let bookNumber= req.params.bookNum;
    let bookName = [
        "Beowulf",
        "Hamlet, Othello, Romeo and Juliet, MacBeth",
        "Oliver Twist, A Christmas Carol",
        "The Picture of Dorian Gray, The Importance of Being Earnest",
    ];
    res.send(bookName[bookNumber - 1]);
})
const authors = [
    {
        name: "Lawrence Nowell",
        nationality: "UK",
        books: ["Beowulf"]
    },
    {
        name: "William Shakespeare",
        nationality: "UK",
        books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
    },
    {
        name: "Charles Dickens",
        nationality: "US",
        books: ["Oliver Twist", "A Christmas Carol"]
    },
    {
        name: "Oscar Wilde",
        nationality: "UK",
        books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
    },
]
app.get('/json/authors/:id', (req,res) => {
    let id= req.params.id;   
    res.json({
        name: authors[id-1].name,
        nationality:authors[id-1].nationality
    });
});
app.get('/json/authors/:id/books', (req,res) => {
    let id= req.params.id;   
    res.json({
        books:authors[id-1].books
    });
});
app.get('/bonjour', (req, res, next) => {
    //console.log('req', req)
    //console.log('res', res)
    res.send("<script>console.log('hihi')</script>")
});

app.listen(8000, () => {
    console.log("Server started on port:", 8000);
})