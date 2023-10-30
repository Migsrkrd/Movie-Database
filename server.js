const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'movies_db'
  },
  console.log(`Connected to the books_db database.`)
);

app.get("/api/movies", (req, res) => {
    db.query('SELECT * from movies', function (error, results){
        res.json(results);
    })
});

app.get("/api/movie-reviews", (req, res) => {
    db.query('SELECT movies_name, reviews.review from movies join reviews on reviews.review = movies_review', function (error, results){
        res.json(results);
    })
});

app.listen(PORT, () => {
    console.log(`example app listening at http://localhost:${PORT}`);
});